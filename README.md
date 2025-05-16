<h1 align="center">TBR</h1>

<p align="center">
<img src="https://img.shields.io/github/last-commit/allenh99/tbr?style=flat-square" />
<img src="https://img.shields.io/github/languages/top/allenh99/tbr?style=flat-square" />
<img src="https://img.shields.io/github/languages/count/allenh99/tbr?style=flat-square" />
<img src="https://img.shields.io/github/license/allenh99/tbr?style=flat-square" />
</p>

<p align="center">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Chakra%20UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white"/>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
</p>

A modern web application for book enthusiasts to track their reading journey. Built with React, TypeScript, and Chakra UI, TBR Tracker helps you manage your reading list, track progress, and analyze your reading habits.

![TBR Tracker Screenshot](screenshot.png)

## 🌟 Features

### Book Management
- Add books to your reading list with detailed information
- Track books in three states: To Read, Currently Reading, and Read
- Organize books by series with automatic grouping
- Categorize books as Fiction or Non-Fiction
- Add optional details like genre, series order, and reading dates

### Reading Statistics
- Yearly progress tracking
- reading progress with an interactive progress bar
- Track books read vs. total books
- Monitor currently reading books
- Separate statistics for Fiction and Non-Fiction books

### Data Management
- Export your booklist to a text file
- Import books from a text file
- Automatic data persistence using localStorage
- Series grouping with collapsible sections

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tbr
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📖 Usage Guide

### Adding Books
1. Click the "Add Book" button
2. Fill in the required information:
   - Title
   - Author
   - Status (To Read/Reading/Read)
   - Genre (Fiction/Non-Fiction)
3. Optional fields:
   - Series name
   - Series order number
   - Start date
   - Finish date

### Managing Books
- Use the "Options" menu on each book card to:
  - Change book status
  - Delete books
- Books in a series are automatically grouped
- Click on a series header to expand/collapse the group

### Import/Export
- Export: Click "Export List" to save your booklist as a text file
- Import: Click "Import List" to load books from a text file
- File format: `title,author,genre,status`

## 🛠️ Technical Details

### Built With
- React 18
- TypeScript
- Chakra UI
- Vite

### Project Structure
```
tbr/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Main application pages
│   ├── types/         # TypeScript type definitions
│   └── App.tsx        # Main application component
├── public/            # Static assets
└── package.json       # Project dependencies
```

## 🙏 Acknowledgments

- [Chakra UI](https://chakra-ui.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)