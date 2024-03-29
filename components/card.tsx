"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { Comment } from "../common/interface";

interface PostCardProps {
  postId: string;
  comments: Comment[];
  imageId: string;
  handleCreateComment: (postId: string, comment: string) => void;
}

export default function PostCard({
  postId,
  comments,
  imageId,
  handleCreateComment,
}: PostCardProps) {
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    await handleCreateComment(postId, comment);
    setIsLoading(false);
    setComment("");
  };

  return (
    <Card>
      <CardBody>
        <Image
          src={`${process.env.bucketUrl}/${imageId}`}
          alt="image"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" className="text-center">
            Comments
          </Heading>
          {comments.map((comment) => (
            <Text key={comment.id}>
              {comment.username}: "{comment.content}"
            </Text>
          ))}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter gap={5}>
        <Input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter comment"
        />
        <Button
          colorScheme="blue"
          onClick={onSubmit}
          isLoading={isLoading}
          isDisabled={!comment}
        >
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}
