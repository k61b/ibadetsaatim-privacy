const App = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Gizlilik Politikası</h1>
      <p className="text-gray-700 mb-4">Yürürlük Tarihi: 2 Mart 2025</p>

      <h2 className="text-2xl font-bold mt-6">1. Giriş</h2>
      <p className="text-gray-700">
        İbadet Saatim uygulamasına hoş geldiniz! Gizliliğiniz bizim için
        önemlidir. Bu Gizlilik Politikası, uygulamamızı kullanırken verilerinizi
        nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.
      </p>

      <h2 className="text-2xl font-bold mt-6">2. Topladığımız Bilgiler</h2>
      <p className="text-gray-700">
        İbadet Saatim uygulaması hesap kaydı veya kimlik doğrulaması
        gerektirmediği için herhangi bir kişisel olarak tanımlanabilir bilgi
        (PII) toplamaz. Tüm veriler cihazınızda yerel olarak saklanır ve hiçbir
        şekilde dış sunuculara aktarılmaz.
      </p>

      <h2 className="text-2xl font-bold mt-6">3. Veri Depolama ve Güvenlik</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          Kullanıcı verileri, zikir sayıları ve tercihler dahil olmak üzere
          tamamen cihazınızda saklanır.
        </li>
        <li>
          Verileriniz hiçbir harici veritabanına veya bulut hizmetine aktarılmaz
          ya da saklanmaz.
        </li>
        <li>Verileriniz tamamen gizlidir ve üçüncü taraflarla paylaşılmaz.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">4. İzinler</h2>
      <p className="text-gray-700">
        Uygulamamız, işlevselliği geliştirmek için cihazınızın belirli
        özelliklerine erişim izni isteyebilir:
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          <strong>Depolama:</strong> Zikir ilerlemenizi saklamak ve geri
          yüklemek için.
        </li>
        <li>
          <strong>Bildirimler:</strong> Zikir zamanlarınızı hatırlatmak için
          (eğer kullanıcı tarafından etkinleştirilirse).
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">5. Üçüncü Taraf Hizmetler</h2>
      <p className="text-gray-700">
        İbadet Saatim herhangi bir üçüncü taraf analiz, reklam veya izleme
        hizmetiyle entegre değildir. Verileriniz tamamen sizin kontrolünüzdedir.
      </p>

      <h2 className="text-2xl font-bold mt-6">
        6. Gizlilik Politikasındaki Değişiklikler
      </h2>
      <p className="text-gray-700">
        Bu Gizlilik Politikası zaman zaman güncellenebilir. Herhangi bir
        değişiklik uygulamada yansıtılacak olup, bu sayfayı periyodik olarak
        gözden geçirmenizi öneririz.
      </p>

      <h2 className="text-2xl font-bold mt-6">7. İletişim</h2>
      <p className="text-gray-700">
        Bu Gizlilik Politikası hakkında herhangi bir sorunuz varsa, lütfen
        bizimle
        <strong> kayrabtuncer@gmail.com</strong> üzerinden iletişime geçin.
      </p>
    </div>
  )
}

export default App
