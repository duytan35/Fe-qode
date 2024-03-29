"use client";
import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";

interface FileUploadProps {
  handleUploadFile: (file: File) => void;
}

export const FileUpload = ({ handleUploadFile }: FileUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async () => {
    if (!selectedFile) return;
    setIsLoading(true);

    await handleUploadFile(selectedFile);

    setIsLoading(false);
    setSelectedFile(undefined);
  };

  return (
    <Box>
      <Input
        className="!w-[300px] !border-none"
        type="file"
        accept="image/*"
        onChange={(e) => setSelectedFile(e.target.files?.[0])}
      />
      <Button
        onClick={handleUpload}
        colorScheme="blue"
        isDisabled={!selectedFile}
        isLoading={isLoading}
      >
        Add image
      </Button>
    </Box>
  );
};
