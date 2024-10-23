import React from 'react';

const ArticlePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src="https://via.placeholder.com/800x400"
          alt="Article banner"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">Judul Artikel Sederhana</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ini adalah artikel sederhana yang menggunakan React dan Tailwind CSS. Anda dapat menambahkan
            berbagai konten di dalam artikel ini, seperti gambar, teks, atau elemen lain.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Subjudul</h2>
          <p className="text-gray-600 leading-relaxed">
            Contoh paragraf untuk mendemonstrasikan penggunaan Tailwind CSS. Tailwind sangat mudah digunakan 
            dengan utility-first approach, memungkinkan Anda untuk dengan cepat membuat layout yang menarik 
            tanpa menulis banyak CSS kustom.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
