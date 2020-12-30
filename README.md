# Setruva
Setur 2020 hackathon yarışması truva takımının seyahati ayağınıza getirecek fikrinin **canlı** uygulaması!

## Kullanılan teknolojiler
##### React Native
Demo olarak hemen şimdi, şu an, anında uygulamamızı hem iOS hem Android cihazınızda deneyimleyebilmeniz için React Native kullandık. 

Buradaki adrese giderek [Expo](https://expo.io/ "Expo")'yu indirdikten sonra uygulamamızı deneyebilirsiniz. 

https://exp.host/@yurdakulmustafa/truva-setur

##### Amazon Web Services
Canlı yayın backendini direkt olarak Amazon Web Servisleri aracılığı ile ayağa kaldırıyoruz. Amplify ile canlı olarak yayını uygulamamıza gönderiyoruz. Üstelik yapılan canlı yayınlar daha sonra kullanılmak üzere veri tabanına kayıt ediliyor.

Detaylı bilgi için [Amplifty AWS](https://docs.amplify.aws/ "Amplifty AWS") sayfasını ziyaret edebilirsiniz.

Bu konuda [Nader Dabit](https://github.com/dabit3 "Nader Dabit") abimize teşekkür ederiz. Kendisi güzel makaleler hazırlamış kaynak olarak kullandığımız bu makaleyi de [buraya](https://dev.to/aws/building-a-serverless-live-streaming-platform-with-react-aws-1jmk "buraya") bırakıyoruz.

##### OBS Studio
Yayın programı olarak açık kaynak kodlu [OBS Studio](https://github.com/obsproject/obs-studio "OBS Studio") kullanıyoruz.  Yüksek görüntü ve ses kalitesi, 0 gecikme teşekkürler OBS.
