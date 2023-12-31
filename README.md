# ExpressJS + Prisma

Jika teman - teman ingin menggunakan repository ini, bisa melakukan perintah sebagai berikut.

1. Clone Repository

   Pastikan sudah menginstall git bash. [[Downlad Git Bash]](https://git-scm.com/downloads)

   ```sh
   git clone https://github.com/naufal-yafi/medium-tutorial-bikin-restful-api.git
   ```

2. Download Semua Library

   Pastikan sudah menginstall NodeJS. [[Downlad NodeJS]](https://nodejs.org/en)

   ```sh
   npm i
   ```

3. Membuat database

   Buatlah sebuah database dengan nama `medium-restful-api` atau jika ingin diganti nama databasenya, tolong untuk tidak lupa mengubah konfigurasi pada file `.env`

4. Migrate database

   ```sh
   npx prisma migrate dev init
   ```

5. Jalankan server
   ```sh
   npm run dev
   ```
