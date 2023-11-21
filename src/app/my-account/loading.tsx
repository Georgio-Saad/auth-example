import React from 'react';

export default async function loading() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-orange-300 gap-3">
      <section className="gap-4">
        <p className="w-25 h-12 bg-black" />
        <p className="w-25 h-12 bg-black" />
        <p className="w-25 h-12 bg-black" />
        <p className="w-25 h-12 bg-black" />
        <p className="w-25 h-12 bg-black" />
        <p className="w-25 h-12 bg-black" />
        <div className="w-[200px] h-[200px] bg-black" />
      </section>
    </main>
  );
}
