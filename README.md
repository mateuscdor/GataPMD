# Esta versión de GataBot no esta terminada.

<p align="center">
<img src="https://i.imgur.com/8fK4h6F.jpg" alt="GataBot-MD" width="500"/>
</p>
<p align="center">
<a href="#"><img title="GataBot-MD" src="https://img.shields.io/badge/CAMBIAR LA SESIÓN ANTES DE USAR-red?colorA=%255ff0000&colorB=%23017e40&style=for-the-badge"></a> 
</p>
<p align="center">
</p>
<a href="#"><img title="PENTING" src="https://img.shields.io/badge/PARA USUARIOS DE TERMUX POR FAVOR LEA EL README-red?colorA=%255ff0000&colorB=%23971920&style=for-the-badge"></a>
</p>
<p align="center">
</p>
<p align="center">
<a href="https://github.com/GataNina-Li/GataBot-MD"><img title="Followers" src="https://img.shields.io/github/followers/GataNina-Li?color=blue&style=flat-square"></a>
<a href="https://github.com/GataNina-Li/GataBot-MD"><img title="Stars" src="https://img.shields.io/github/stars/GataNina-Li/GataBot-MD?color=red&style=flat-square"></a>
<a href="https://github.com/GataNina-Li/GataBot-MD/network/members"><img title="Forks" src="https://img.shields.io/github/forks/GataNina-Li/GataBot-MD?color=red&style=flat-square"></a>
<a href="https://github.com/GataNina-Li/GataBot-MD"><img title="Watching" src="https://img.shields.io/github/watchers/GataNina-Li/GataBot-MD?label=Watchers&color=blue&style=flat-square"></a> 
</p>

---

# GataBot-MD
#### Versión actual: 1.0.0
## Información
> Whatsapp usando una biblioteca de Baileys.
> Si encuentra algún tipo de error, perdone por el momento
>
> • NOTA: ESTE REPOSITORIO NO PUEDE HACER SESIONES EN TERMUX, POR LO QUE SI BUSCAS CREAR UNA SESIÓN, PRIMERO DEBE DE UTILIZAR OTRO REPOSITORIO.
>  
> • Repositorio recomendado para crear la sesión: [GataBot-GD-MD](https://github.com/GataNina-Li/GataBot-GD-MD)
>
> • NOTA: asegúrese de que su red sea fluida y que su dispositivo esté bien, 
> 
> • Si usa termux, puede tardar mucho en responder, le sugiero que use heroku
> 

## Cómo cambiar la visualización del menú
----
### Visualización del menú GIF
```ts
 let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/menu.mp4'), gifPlayback: true }, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Visualización del menú con imagen
```ts
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/elyas.jpg')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Visualización del menú con ubicación
```ts
 const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: text.trim(),
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/elyas.jpg') },
           hydratedFooterText: wm,
           hydratedButtons: [{       
```

### Visualización del menú con vídeo
```ts
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/menu.mp4')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{           	
```
----           


## HOW TO CONNECT TO MONGODB WHEN RUN IN HEROKU

* Create account and database in mongodb atlas [`watch here`](https://youtu.be/rPqRyYJmx2g)
* when you already have a database, you just need to take mongourl
* Put mongourl in Procfile `web: node . --db 'mongourl'`
* Example `worker: node . --db 'mongodb+srv://Paquito1923:<password>@cluster0.wwdwr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'`


## UNTUK PENGGUNA WINDOWS/VPS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Unduh & Instal ImageMagick [`Klik Disini`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/Paquito1923/elyasmd
cd elyasmd
npm install
npm update
npm index
```

---------

## UNTUK PENGGUNA TERMUX
```bash

CARI SESSION DULU PAKAI SC BOT MD YANG LAIN🙏
pkg update && pkg upgrade
pkg install git
pkg install nodejs
pkg install ffmpeg
pkg install imagemagick
pkg install yarn
git clone https://github.com/GataNina-Li/GataBot-MD
cd GataBot-MD
yarn
mc
ganti session
node .
```

## UNTUK PENGGUNA HEROKU

### Instal Buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git*

## Installing the FFmpeg for Windows
* Unduh salah satu versi FFmpeg yang tersedia dengan mengklik [di sini](https://www.gyan.dev/ffmpeg/builds/).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `ffmpeg`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal FFmpeg, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:
```cmd
> ffmpeg -version
```
<h3 align="center">Made by :</h3>
<p align="center">
  </a href="https://github.com/ilmanhdyt"><img src="https://github.com/Hyzerr.png?size=128" height="128" width="128" /></a>
  </a href="https://github.com/ilmanhdyt"><img src="https://github.com/ilmanhdyt.png?size=128" height="128" width="128" /></a>
</p>

# Thanks to
 [![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo)
 [![Ariffb](https://github.com/ariffb25.png?size=100)](https://github.com/ariffb25) 
 [![F](https://github.com/Alfarqun.png?size=100)
