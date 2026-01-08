"use client";

/**
 * Page Uploader
 * Upload images to a catalog with progress tracking
 */

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface PageUploaderProps {
  catalogId: string;
  nextPageNumber: number;
}

interface UploadProgress {
  fileName: string;
  pageNumber: number;
  progress: number;
  status: "uploading" | "processing" | "complete" | "error";
  error?: string;
}

export function PageUploader({ catalogId, nextPageNumber }: PageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<UploadProgress[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(selectedFiles);
    setUploadProgress([]);
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    setUploading(true);

    // Initialize progress tracking for all files
    const initialProgress: UploadProgress[] = files.map((file, i) => ({
      fileName: file.name,
      pageNumber: nextPageNumber + i,
      progress: 0,
      status: "uploading" as const,
    }));
    setUploadProgress(initialProgress);

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const pageNumber = nextPageNumber + i;
        const fileExt = file.name.split(".").pop();
        const fileName = `${catalogId}/${pageNumber}.${fileExt}`;

        try {
          // Upload to Supabase Storage with progress tracking
          const { error: uploadError, data } = await supabase.storage
            .from("catalog-images")
            .upload(fileName, file, {
              cacheControl: "3600",
              upsert: false,
            });

          if (uploadError) throw uploadError;

          // Update progress - file uploaded
          setUploadProgress((prev) =>
            prev.map((p, idx) =>
              idx === i ? { ...p, progress: 70, status: "processing" } : p
            )
          );

          // Get public URL
          const {
            data: { publicUrl },
          } = supabase.storage.from("catalog-images").getPublicUrl(fileName);

          // Create database entry
          const { error: dbError } = await supabase.from("catalog_pages").insert({
            catalog_id: catalogId,
            page_number: pageNumber,
            image_url: publicUrl,
            storage_path: fileName,
          });

          if (dbError) throw dbError;

          // Update progress - complete
          setUploadProgress((prev) =>
            prev.map((p, idx) =>
              idx === i ? { ...p, progress: 100, status: "complete" } : p
            )
          );
        } catch (fileError: any) {
          // Mark this file as errored
          setUploadProgress((prev) =>
            prev.map((p, idx) =>
              idx === i
                ? { ...p, status: "error", error: fileError.message }
                : p
            )
          );
        }
      }

      // Clear files and reset form after a short delay
      setTimeout(() => {
        setFiles([]);
        setUploadProgress([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        router.refresh();
      }, 2000);
    } catch (error: any) {
      console.error("Error uploading:", error);
      alert(`Failed to upload: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Pages</CardTitle>
        <CardDescription>
          Upload catalog page images. Multiple files will be added sequentially starting
          from page {nextPageNumber}.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileSelect}
            disabled={uploading}
            className="block w-full text-sm text-muted-foreground
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-primary file:text-primary-foreground
              hover:file:bg-primary/90
              disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {files.length > 0 && !uploading && (
          <div className="text-sm text-muted-foreground">
            {files.length} file{files.length !== 1 ? "s" : ""} selected
          </div>
        )}

        {/* Upload Progress */}
        {uploadProgress.length > 0 && (
          <div className="space-y-3">
            {uploadProgress.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">
                    Page {item.pageNumber} - {item.fileName}
                  </span>
                  <span className="text-muted-foreground">
                    {item.status === "uploading" && "Uploading..."}
                    {item.status === "processing" && "Processing..."}
                    {item.status === "complete" && (
                      <span className="text-green-500">✓ Complete</span>
                    )}
                    {item.status === "error" && (
                      <span className="text-red-500">✗ Failed</span>
                    )}
                  </span>
                </div>
                <Progress value={item.progress} className="h-2" />
                {item.error && (
                  <p className="text-xs text-red-500">{item.error}</p>
                )}
              </div>
            ))}
          </div>
        )}

        <Button onClick={handleUpload} disabled={uploading || files.length === 0}>
          {uploading ? "Uploading..." : "Upload Pages"}
        </Button>
      </CardContent>
    </Card>
  );
}
