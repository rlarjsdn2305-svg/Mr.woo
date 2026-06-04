export default function Footer() {
  return (
    <footer className="bg-[#3C3A36] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-white/40 rounded-full"></div>
              <span className="text-xl font-bold">Personal Trainer Woo</span>
            </div>
            <p className="text-[#9B9185] text-sm leading-relaxed">
              운동, 영양, 라이프스타일을 연결하는 통합 건강관리 서비스를 제공합니다. 당신의 가장 건강한 순간을 설계합니다.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold mb-6 text-white">Menu</h4>
              <ul className="space-y-4 text-sm text-[#9B9185]">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white">Contact</h4>
              <ul className="space-y-4 text-sm text-[#9B9185]">
                <li>주안동, 미추홀구, 인천광역시</li>
                <li>admin@ptwoo.co.kr</li>
                <li>010-XXXX-XXXX</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white">Policy</h4>
              <ul className="space-y-4 text-sm text-[#9B9185]">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6 text-xs text-[#7D7468]">
          <p>© 2024 Personal Trainer Woo. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Blog</a>
            <a href="#" className="hover:text-white">KakaoTalk</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
