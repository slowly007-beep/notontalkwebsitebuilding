export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* 브랜드 */}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-2">NotionTalk</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              노션의 모든 가능성을 연구하고 공유하는 커뮤니티
            </p>
          </div>
          
          {/* SNS 링크 */}
          <div className="flex space-x-6">
            <a 
              href="https://threads.net/@iooo_tttt" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-brand transition-colors text-sm"
            >
              Threads
            </a>
            <a 
              href="https://instagram.com/iooo_tttt" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-brand transition-colors text-sm"
            >
              Instagram
            </a>
            <a 
              href="https://youtube.com/@iooo_tttt" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-brand transition-colors text-sm"
            >
              YouTube
            </a>
          </div>
          
          {/* 카피라이트 */}
          <div className="pt-6 border-t border-white/5 w-full">
            <p className="text-xs text-muted-foreground">
              &copy; 2024 NotionTalk. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}