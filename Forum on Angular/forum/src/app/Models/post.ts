export interface IPost {
  author: string;
  date: string;
  title: string;
  content: string;
  tags: string[];
  views: number;
  answers: number;
  votes: number;
}