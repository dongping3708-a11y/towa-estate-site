const services = [
  ['売買仲介', '买卖中介', '大阪を中心に、居住用・投資用不動産の売買を丁寧にサポートします。'],
  ['賃貸仲介', '租赁中介', '住まい探しから事業用物件まで、条件に合う物件をご提案します。'],
  ['不動産管理', '物业管理', '賃貸管理・入居者対応・資産価値維持を一括でサポートします。'],
  ['投資用不動産', '投资物业', '利回り・融資・出口戦略を踏まえた投資物件をご紹介します。'],
  ['海外投資家サポート', '海外投资支持', '外国人のお客様向けに購入、融資、税務、ビザ関連の連携支援を行います。'],
  ['不動産買取', '不动产收购', 'スピード感のある買取相談にも柔軟に対応します。'],
]

const listings = [
  ['Osaka Central Residence', '大阪市中央区', 'Investment / Residence'],
  ['Namba Urban Asset', '難波・日本橋エリア', 'Income Property'],
  ['Bay Area Premium Unit', '大阪ベイエリア', 'Luxury / Second Home'],
]

export default function Home() {
  return (
    <main className="site">
      <style>{`
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #070b12; }
        .site { background:#070b12; color:#f7f3ea; font-family: Arial, sans-serif; overflow-x:hidden; }
        .fade-up { opacity: 0; transform: translateY(28px); animation: fadeUp 1s cubic-bezier(.2,.8,.2,1) forwards; }
        .delay-1 { animation-delay: .18s; }
        .delay-2 { animation-delay: .36s; }
        .delay-3 { animation-delay: .54s; }
        .lux-card { transition: transform .55s cubic-bezier(.2,.8,.2,1), box-shadow .55s ease, border-color .55s ease; }
        .lux-card:hover { transform: translateY(-10px); box-shadow: 0 28px 70px rgba(15,23,42,.18); border-color: rgba(201,164,106,.55) !important; }
        .image-zoom { overflow:hidden; }
        .image-zoom > div { transform: scale(1.02); animation: slowZoom 13s ease-in-out infinite alternate; }
        .hover-zoom { transition: transform .8s cubic-bezier(.2,.8,.2,1); }
        .lux-card:hover .hover-zoom { transform: scale(1.08); }
        .gold-line { width: 0; height: 1px; background:#c9a46a; animation: lineGrow 1.2s ease forwards .65s; }
        .float-menu { animation: float 3.4s ease-in-out infinite; }
        .shine { position: relative; overflow: hidden; }
        .shine:after { content:''; position:absolute; top:0; left:-120%; width:70%; height:100%; background:linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent); transform:skewX(-18deg); animation: shine 5s ease-in-out infinite; }
        .section-reveal { animation: fadeUp .9s cubic-bezier(.2,.8,.2,1) both; animation-timeline: view(); animation-range: entry 0% cover 28%; }
        @keyframes fadeUp { to { opacity:1; transform:translateY(0); } }
        @keyframes slowZoom { from { transform:scale(1.02); } to { transform:scale(1.12); } }
        @keyframes lineGrow { to { width: 180px; } }
        @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-7px); } }
        @keyframes shine { 0%, 55% { left:-120%; } 75%, 100% { left:130%; } }
        @media (max-width: 720px) { nav { display:none !important; } .hero-wrap { margin-top: 28px !important; } }
      `}</style>

      <section style={{minHeight:'100vh', padding:'28px 22px 70px', background:'radial-gradient(circle at 75% 18%, rgba(191,151,91,.28), transparent 35%), linear-gradient(135deg,#05070b 0%,#0b1626 55%,#101827 100%)'}}>
        <header className="fade-up" style={{display:'flex', justifyContent:'space-between', alignItems:'center', maxWidth:1120, margin:'0 auto 90px'}}>
          <div style={{fontWeight:800, letterSpacing:'.08em'}}>TOWA ESTATE</div>
          <nav style={{display:'flex', gap:18, fontSize:13, opacity:.86}}>
            <span>Services</span><span>Investment</span><span>Company</span><span>Contact</span>
          </nav>
        </header>
        <div className="hero-wrap" style={{maxWidth:1120, margin:'0 auto', display:'grid', gap:36}}>
          <div style={{maxWidth:760}}>
            <p className="fade-up delay-1" style={{color:'#c9a46a', letterSpacing:'.22em', fontSize:12, marginBottom:18}}>OSAKA REAL ESTATE / 東和地産</p>
            <div className="gold-line" />
            <h1 className="fade-up delay-2" style={{fontSize:'clamp(44px, 9vw, 96px)', lineHeight:1.02, margin:'26px 0 0', letterSpacing:'-.05em'}}>Real Estate with Integrity, Care, and Global Vision.</h1>
            <p className="fade-up delay-3" style={{fontSize:'clamp(18px, 4vw, 25px)', lineHeight:1.65, color:'#d7dce7', maxWidth:680, marginTop:28}}>大阪を拠点に、国内外のお客様へ信頼できる不動産サービスを提供します。購入・売却・管理・投資まで、資産形成の一歩を誠実に支えます。</p>
            <p className="fade-up delay-3" style={{color:'#bfc7d5', lineHeight:1.8}}>立足大阪，为日本本地客户、中国客户及海外投资者提供专业、安心的不动产服务。</p>
            <div className="fade-up delay-3" style={{display:'flex', flexWrap:'wrap', gap:14, marginTop:32}}>
              <a className="shine" href='mailto:info@towaestate.co.jp' style={{background:'#c9a46a', color:'#08101c', padding:'15px 22px', borderRadius:999, textDecoration:'none', fontWeight:700}}>お問い合わせ</a>
              <a href='#services' style={{border:'1px solid rgba(255,255,255,.25)', color:'#fff', padding:'15px 22px', borderRadius:999, textDecoration:'none'}}>サービスを見る</a>
            </div>
          </div>
          <div className="fade-up delay-3 image-zoom" style={{border:'1px solid rgba(255,255,255,.16)', borderRadius:28, padding:22, background:'rgba(255,255,255,.06)', backdropFilter:'blur(10px)'}}>
            <div style={{height:320, borderRadius:20, background:'linear-gradient(135deg, rgba(0,0,0,.05), rgba(201,164,106,.24)), url(https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1400&q=80)', backgroundSize:'cover', backgroundPosition:'center'}} />
          </div>
        </div>
        <div className="float-menu" style={{position:'fixed', right:22, bottom:28, zIndex:10, width:54, height:54, borderRadius:'50%', background:'rgba(5,7,11,.72)', border:'1px solid rgba(255,255,255,.25)', display:'grid', placeItems:'center', boxShadow:'0 18px 45px rgba(0,0,0,.25)'}}>
          <span style={{fontSize:26}}>≡</span>
        </div>
      </section>

      <section id='services' className="section-reveal" style={{padding:'86px 22px', background:'#f6f1e8', color:'#111827'}}>
        <div style={{maxWidth:1120, margin:'0 auto'}}>
          <p style={{color:'#9a6a2e', letterSpacing:'.2em', fontSize:12}}>SERVICES</p>
          <h2 style={{fontSize:'clamp(34px,6vw,58px)', margin:'12px 0 22px'}}>大阪不動産の実務を、国際感覚で。</h2>
          <p style={{fontSize:18, lineHeight:1.8, color:'#4b5563', maxWidth:760}}>売買・賃貸・管理・投資・外国人向け購入支援まで、TOWA ESTATEは取引の入口から出口まで伴走します。</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:18, marginTop:34}}>
            {services.map((s) => (
              <div className="lux-card" key={s[0]} style={{background:'#fff', borderRadius:22, padding:24, border:'1px solid #e8dcc8', boxShadow:'0 16px 40px rgba(15,23,42,.08)'}}>
                <h3 style={{fontSize:22, margin:'0 0 6px'}}>{s[0]}</h3>
                <p style={{color:'#9a6a2e', margin:'0 0 14px'}}>{s[1]}</p>
                <p style={{color:'#4b5563', lineHeight:1.7, margin:0}}>{s[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-reveal" style={{padding:'88px 22px', background:'#0b1220'}}>
        <div style={{maxWidth:1120, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:24, alignItems:'center'}}>
          <div>
            <p style={{color:'#c9a46a', letterSpacing:'.2em', fontSize:12}}>OVERSEAS INVESTORS</p>
            <h2 style={{fontSize:'clamp(34px,6vw,56px)', margin:'12px 0 20px'}}>海外投資家の日本不動産購入をワンストップで支援。</h2>
            <p style={{color:'#cbd5e1', lineHeight:1.9, fontSize:17}}>物件選定、銀行口座、融資相談、税務・ビザ専門家との連携まで、外国人のお客様が安心して日本不動産へアクセスできる体制を整えています。</p>
            <p style={{color:'#bfc7d5', lineHeight:1.8}}>为海外客户提供日本房产购买、融资、税务及签证相关协作支持。</p>
          </div>
          <div className="lux-card" style={{background:'linear-gradient(145deg,#101a2e,#18233a)', border:'1px solid rgba(255,255,255,.12)', borderRadius:26, padding:28}}>
            {['Property Purchase in Japan','Loan / Bank Support','Tax & Visa Professional Network','After-purchase Management'].map((x)=>(
              <div key={x} style={{padding:'18px 0', borderBottom:'1px solid rgba(255,255,255,.12)', color:'#fff', fontSize:18}}>{x}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-reveal" style={{padding:'86px 22px', background:'#fff', color:'#111827'}}>
        <div style={{maxWidth:1120, margin:'0 auto'}}>
          <p style={{color:'#9a6a2e', letterSpacing:'.2em', fontSize:12}}>SELECTED PROPERTY STYLE</p>
          <h2 style={{fontSize:'clamp(32px,6vw,54px)', margin:'12px 0 30px'}}>Property Consulting</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:18}}>
            {listings.map((item, i)=>(
              <div className="lux-card" key={item[0]} style={{borderRadius:24, overflow:'hidden', border:'1px solid #e5e7eb', background:'#fff'}}>
                <div className="image-zoom" style={{height:210, overflow:'hidden'}}><div className="hover-zoom" style={{height:'100%', background:`linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.35)), url(https://images.unsplash.com/photo-${['1486406146926-c627a92ad1ab','1502672260266-1c1ef2d93688','1494526585095-c41746248156'][i]}?auto=format&fit=crop&w=1000&q=80)`, backgroundSize:'cover', backgroundPosition:'center'}} /></div>
                <div style={{padding:20}}>
                  <h3 style={{margin:'0 0 8px', fontSize:21}}>{item[0]}</h3>
                  <p style={{margin:'0 0 6px', color:'#6b7280'}}>{item[1]}</p>
                  <p style={{margin:0, color:'#9a6a2e'}}>{item[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-reveal" style={{padding:'86px 22px', background:'#f6f1e8', color:'#111827'}}>
        <div style={{maxWidth:1120, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:30}}>
          <div>
            <p style={{color:'#9a6a2e', letterSpacing:'.2em', fontSize:12}}>COMPANY</p>
            <h2 style={{fontSize:'clamp(32px,6vw,52px)', margin:'12px 0'}}>株式会社TOWA ESTATE<br/>東和地産</h2>
            <p style={{color:'#4b5563', lineHeight:1.8}}>誠実に、専門的に、そして世界へ。大阪から信頼で未来をつなぐ不動産会社です。</p>
          </div>
          <div className="lux-card" style={{background:'#111827', color:'#fff', borderRadius:26, padding:28}}>
            <p>〒542-0082</p>
            <p>大阪市中央区島之内1丁目19-21<br/>大和長堀ビル2階中</p>
            <p>TEL：06-6210-1549</p>
            <p>Email：info@towaestate.co.jp</p>
            <p>Website：https://towaestate.co.jp</p>
          </div>
        </div>
      </section>

      <footer style={{padding:'46px 22px', background:'#05070b', color:'#9ca3af', textAlign:'center'}}>
        <h3 style={{color:'#fff', fontSize:28, margin:'0 0 12px'}}>TOWA ESTATE｜東和地産</h3>
        <p>Real Estate with Integrity, Care, and Global Vision.</p>
        <p>© TOWA ESTATE. All Rights Reserved.</p>
      </footer>
    </main>
  )
}