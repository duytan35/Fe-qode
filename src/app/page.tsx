"use client";

import { Box, SimpleGrid } from "@chakra-ui/react";
import PostCard from "../../components/card";
import { FileUpload } from "../../components/file-upload";
import { createComment, getPosts, uploadImage } from "../../service";
import { useEffect, useState } from "react";
import { Post } from "../../common/interface";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchData = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUploadFile = async (file: File) => {
    await uploadImage(file);
    fetchData();
  };

  const handleCreateComment = async (postId: string, comment: string) => {
    await createComment(postId, comment);
    fetchData();
  };

  return (
    <Box className="px-10 py-3">
      <Box className="text-center text-[35px] text-green-900">Demo App</Box>
      <Box className="text-center my-5">
        <FileUpload handleUploadFile={handleUploadFile} />
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            postId={post.id}
            imageId={post.imageId}
            comments={post.comments}
            handleCreateComment={handleCreateComment}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
