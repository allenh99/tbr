export interface Book {
  id: string;
  title: string;
  author: string;
  status: 'read' | 'reading' | 'to-read';
  startDate?: string;
  finishDate?: string;
  rating?: number;
  review?: string;
  genre?: string;
  pages?: number;
  coverUrl?: string;
}

export interface ReadingStats {
  totalBooks: number;
  booksRead: number;
  booksReading: number;
  booksToRead: number;
  averageRating: number;
  totalPages: number;
  booksByGenre: Record<string, number>;
  monthlyProgress: Record<string, number>;
} 