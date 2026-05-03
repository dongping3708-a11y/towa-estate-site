'use client'

import { useMemo, useState } from 'react'

const services = [
  ['売買仲介', '买卖中介', '大阪を中心に、居住用・投資用不動産の売買を丁寧にサポートします。'],
  ['賃貸仲介', '租赁中介', '住まい探しから事業用物件まで、条件に合う物件をご提案します。'],
  ['不動産管理', '物业管理', '賃貸管理・入居者対応・資産価値維持を一括でサポートします。'],
  ['投資用不動産', '投资物业', '利回り・融資・出口戦略を踏まえた投資物件をご紹介します。'],
  ['海外投資家サポート', '海外投资支持', '外国人のお客様向けに購入、融資、税務、ビザ関連の連携支援を行います。'],
  ['不動産買取', '不动产收购', 'スピード感のある買取相談にも柔軟に対応します。'],
]

const properties = [
  ['Osaka Central Residence', '大阪市中央区', '¥58,000,000', '5.6%', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'],
  ['Namba Urban Asset', '難波・日本橋', '¥92,000,000', '6.1%', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'],
  ['Bay Area Premium Unit', '大阪ベイエリア', '¥76,000,000', '4.8%', 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'],
  ['Kitahama Tower View', '北浜・淀屋橋', '¥128,000,000', '4.2%', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'],
  ['Shinsaibashi Asset', '心斎橋', '¥66,000,000', '5.9%', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'],
]

export default function Home() {
  const [price, setPrice] = useState(6000)
  const [rent, setRent] = useState(32)
  const [cost, setCost] = useState(6)
  const [down, setDown] = useState(1500)

  const result = useMemo(() => {
    const annualRent = rent * 12
    const net = annualRent * (1 - cost / 100)
    const grossYield = price ? annualRent / price * 100 : 0
    const netYield = price ? net / price * 100 : 0
    const cashYield = down ? net / down * 100 : 0
    return { annualRent, net, grossYield, netYield, cashYield }
  }, [price, rent, cost, down])

  return (
    <main className="site">
      <style>{`
        html{scroll-behavior:smooth} body{margin:0;background:#070b12}.site{background:#070b12;color:#f7f3ea;font-family:Arial,'Hiragino Sans','Yu Gothic',sans-serif;overflow-x:hidden}.fade-up{opacity:0;transform:translateY(28px);animation:fadeUp 1s cubic-bezier(.2,.8,.2,1) forwards}.delay-1{animation-delay:.18s}.delay-2{animation-delay:.36s}.delay-3{animation-delay:.54s}.lux-card{transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s,border-color .55s}.lux-card:hover{transform:translateY(-10px);box-shadow:0 28px 70px rgba(15,23,42,.18);border-color:rgba(201,164,106,.55)!important}.gold{color:#c9a46a}.shine{position:relative;overflow:hidden}.shine:after{content:'';position:absolute;top:0;left:-120%;width:70%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.22),transparent);transform:skewX(-18deg);animation:shine 5s ease-in-out infinite}.hero-video{position:absolute;inset:0;background:linear-gradient(rgba(3,7,18,.54),rgba(3,7,18,.72)),url(https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1800&q=80);background-size:cover;background-position:center;animation:cinemaZoom 18s ease-in-out infinite alternate}.hero-noise{position:absolute;inset:0;background:radial-gradient(circle at 70% 20%,rgba(201,164,106,.32),transparent 32%),linear-gradient(120deg,rgba(0,0,0,.3),transparent);mix-blend-mode:screen}.parallax-band{background:linear-gradient(rgba(5,7,11,.35),rgba(5,7,11,.78)),url(https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=80);background-size:cover;background-position:center;background-attachment:fixed}.property-track{display:flex;gap:22px;overflow-x:auto;scroll-snap-type:x mandatory;padding:10px 0 30px;animation:trackGlow 8s ease-in-out infinite}.property-track::-webkit-scrollbar{height:6px}.property-track::-webkit-scrollbar-thumb{background:#c9a46a;border-radius:99px}.property-card{min-width:310px;scroll-snap-align:start;background:#fff;color:#111827;border-radius:28px;overflow:hidden;border:1px solid #e7dac4}.property-img{height:230px;background-size:cover;background-position:center;transition:transform .9s cubic-bezier(.2,.8,.2,1)}.property-card:hover .property-img{transform:scale(1.08)}.section-reveal{animation:fadeUp .9s cubic-bezier(.2,.8,.2,1) both;animation-timeline:view();animation-range:entry 0% cover 28%}.float-menu{animation:float 3.4s ease-in-out infinite}.input{width:100%;box-sizing:border-box;padding:15px 16px;border-radius:16px;border:1px solid rgba(17,24,39,.16);background:#fff;font-size:16px}.dark-input{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);color:#fff}.stat{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:22px;padding:20px}.magnetic{transition:transform .35s ease}.magnetic:hover{transform:translateY(-3px) scale(1.02)}@keyframes fadeUp{to{opacity:1;transform:translateY(0)}}@keyframes cinemaZoom{from{transform:scale(1.02)}to{transform:scale(1.16)}}@keyframes shine{0%,55%{left:-120%}75%,100%{left:130%}}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}@keyframes trackGlow{0%,100%{filter:brightness(1)}50%{filter:brightness(1.04)}}@media(max-width:720px){nav{display:none!important}.property-card{min-width:82vw}.parallax-band{background-attachment:scroll}}
      `}</style>

      <section style={{minHeight:'100vh',position:'relative',padding:'28px 22px 72px',overflow:'hidden'}}>
        <div className="hero-video" /><div className="hero-noise" />
        <header className="fade-up" style={{position:'relative',display:'flex',justifyContent:'space-between',alignItems:'center',maxWidth:1160,margin:'0 auto 100px'}}>
          <div style={{fontWeight:800,letterSpacing:'.12em'}}>TOWA ESTATE</div>
          <nav style={{display:'flex',gap:22,fontSize:13,opacity:.9}}><a href="#services" style={{color:'#fff',textDecoration:'none'}}>Services</a><a href="#properties" style={{color:'#fff',textDecoration:'none'}}>Properties</a><a href="#calculator" style={{color:'#fff',textDecoration:'none'}}>Calculator</a><a href="#contact" style={{color:'#fff',textDecoration:'none'}}>Contact</a></nav>
        </header>
        <div style={{position:'relative',maxWidth:1160,margin:'0 auto'}}>
          <p className="fade-up delay-1 gold" style={{letterSpacing:'.26em',fontSize:12}}>OSAKA LUXURY REAL ESTATE / 東和地産</p>
          <h1 className="fade-up delay-2" style={{fontSize:'clamp(48px,10vw,110px)',lineHeight:.98,margin:'22px 0 0',letterSpacing:'-.06em',maxWidth:900}}>Real Estate with Integrity, Care, and Global Vision.</h1>
          <p className="fade-up delay-3" style={{fontSize:'clamp(18px,4vw,25px)',lineHeight:1.75,color:'#e5e7eb',maxWidth:760,marginTop:28}}>大阪を拠点に、国内外のお客様へ信頼できる不動産サービスを提供します。購入・売却・管理・投資まで、資産形成の一歩を誠実に支えます。</p>
          <div className="fade-up delay-3" style={{display:'flex',flexWrap:'wrap',gap:14,marginTop:34}}><a className="shine magnetic" href="#contact" style={{background:'#c9a46a',color:'#08101c',padding:'16px 24px',borderRadius:999,textDecoration:'none',fontWeight:800}}>無料相談する</a><a className="magnetic" href="#properties" style={{border:'1px solid rgba(255,255,255,.35)',color:'#fff',padding:'16px 24px',borderRadius:999,textDecoration:'none'}}>物件を見る</a></div>
        </div>
        <div className="float-menu" style={{position:'fixed',right:22,bottom:28,zIndex:10,width:54,height:54,borderRadius:'50%',background:'rgba(5,7,11,.72)',border:'1px solid rgba(255,255,255,.25)',display:'grid',placeItems:'center',boxShadow:'0 18px 45px rgba(0,0,0,.25)'}}><span style={{fontSize:26}}>≡</span></div>
      </section>

      <section id="properties" className="section-reveal" style={{padding:'90px 22px',background:'#f6f1e8',color:'#111827'}}>
        <div style={{maxWidth:1160,margin:'0 auto'}}><p className="gold" style={{letterSpacing:'.22em',fontSize:12}}>PROPERTY SCROLL SHOWCASE</p><h2 style={{fontSize:'clamp(34px,6vw,60px)',margin:'12px 0 26px'}}>精选房源滚动展示</h2><div className="property-track">{properties.concat(properties).map((p,i)=><div className="property-card lux-card" key={i}><div style={{overflow:'hidden'}}><div className="property-img" style={{backgroundImage:`linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.38)),url(${p[4]})`}} /></div><div style={{padding:22}}><h3 style={{margin:'0 0 8px',fontSize:22}}>{p[0]}</h3><p style={{color:'#6b7280',margin:'0 0 14px'}}>{p[1]}</p><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><b>{p[2]}</b><span style={{color:'#9a6a2e',fontWeight:800}}>想定 {p[3]}</span></div></div></div>)}</div></div>
      </section>

      <section id="services" className="section-reveal" style={{padding:'90px 22px',background:'#fff',color:'#111827'}}><div style={{maxWidth:1160,margin:'0 auto'}}><p className="gold" style={{letterSpacing:'.22em',fontSize:12}}>SERVICES</p><h2 style={{fontSize:'clamp(34px,6vw,58px)',margin:'12px 0 22px'}}>大阪不動産の実務を、国際感覚で。</h2><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:18,marginTop:34}}>{services.map(s=><div className="lux-card" key={s[0]} style={{background:'#fff',borderRadius:22,padding:24,border:'1px solid #e8dcc8',boxShadow:'0 16px 40px rgba(15,23,42,.08)'}}><h3 style={{fontSize:22,margin:'0 0 6px'}}>{s[0]}</h3><p className="gold" style={{margin:'0 0 14px'}}>{s[1]}</p><p style={{color:'#4b5563',lineHeight:1.7,margin:0}}>{s[2]}</p></div>)}</div></div></section>

      <section className="parallax-band section-reveal" style={{minHeight:520,padding:'110px 22px',display:'grid',alignItems:'center'}}><div style={{maxWidth:1160,margin:'0 auto'}}><p className="gold" style={{letterSpacing:'.24em',fontSize:12}}>JAPANESE LUXURY STYLE</p><h2 style={{fontSize:'clamp(40px,8vw,86px)',lineHeight:1.05,margin:'18px 0',maxWidth:900}}>静けさの中に、資産価値を見極める。</h2><p style={{maxWidth:700,color:'#e5e7eb',lineHeight:1.9,fontSize:18}}>日式高端地产网站常见的“慢节奏、强留白、沉浸式视觉”已加入：视频感背景、视差滚动、轻动效与高级黑金调性。</p></div></section>

      <section id="calculator" className="section-reveal" style={{padding:'90px 22px',background:'#0b1220',color:'#fff'}}><div style={{maxWidth:1160,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:26}}><div><p className="gold" style={{letterSpacing:'.22em',fontSize:12}}>INVESTMENT CALCULATOR</p><h2 style={{fontSize:'clamp(34px,6vw,58px)',margin:'12px 0 18px'}}>投资收益快速试算</h2><p style={{color:'#cbd5e1',lineHeight:1.8}}>输入物件价格、月租、运营成本和首付，快速估算表面利回り、净利回り及现金回报率。</p></div><div className="lux-card" style={{background:'linear-gradient(145deg,#111827,#172033)',border:'1px solid rgba(255,255,255,.12)',borderRadius:28,padding:24}}><label>物件価格（万円）<input className="input dark-input" value={price} onChange={e=>setPrice(Number(e.target.value))}/></label><br/><br/><label>月額賃料（万円）<input className="input dark-input" value={rent} onChange={e=>setRent(Number(e.target.value))}/></label><br/><br/><label>运营成本（%）<input className="input dark-input" value={cost} onChange={e=>setCost(Number(e.target.value))}/></label><br/><br/><label>首付 / 自己資金（万円）<input className="input dark-input" value={down} onChange={e=>setDown(Number(e.target.value))}/></label><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))',gap:12,marginTop:22}}><div className="stat"><small>年間賃料</small><h3>{result.annualRent.toFixed(0)}万円</h3></div><div className="stat"><small>表面利回り</small><h3>{result.grossYield.toFixed(2)}%</h3></div><div className="stat"><small>净利回り</small><h3>{result.netYield.toFixed(2)}%</h3></div><div className="stat"><small>现金回报</small><h3>{result.cashYield.toFixed(2)}%</h3></div></div></div></div></section>

      <section id="contact" className="section-reveal" style={{padding:'90px 22px',background:'#f6f1e8',color:'#111827'}}><div style={{maxWidth:1160,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:28}}><div><p className="gold" style={{letterSpacing:'.22em',fontSize:12}}>CONTACT FORM</p><h2 style={{fontSize:'clamp(34px,6vw,58px)',margin:'12px 0 18px'}}>客户咨询入口</h2><p style={{color:'#4b5563',lineHeight:1.8}}>留下姓名、电话、微信或 LINE。当前表单为前端展示版，下一步可接入邮件通知或 Google 表格自动收客。</p><p><b>TEL：</b>06-6210-1549<br/><b>Email：</b>info@towaestate.co.jp</p></div><form className="lux-card" style={{background:'#fff',border:'1px solid #e8dcc8',borderRadius:28,padding:24,boxShadow:'0 16px 45px rgba(15,23,42,.08)'}}><input className="input" placeholder="お名前 / 姓名"/><br/><br/><input className="input" placeholder="電話番号 / 手机号"/><br/><br/><input className="input" placeholder="WeChat / LINE ID"/><br/><br/><select className="input"><option>購入相談 / 购房咨询</option><option>売却相談 / 出售咨询</option><option>投資相談 / 投资咨询</option><option>管理相談 / 管理咨询</option></select><br/><br/><textarea className="input" rows={5} placeholder="ご相談内容 / 咨询内容"/><br/><br/><button className="shine" type="button" style={{width:'100%',background:'#111827',color:'#fff',border:0,borderRadius:999,padding:'16px 20px',fontWeight:800,fontSize:16}}>送信する / 提交咨询</button></form></div></section>

      <footer style={{padding:'52px 22px',background:'#05070b',color:'#9ca3af',textAlign:'center'}}><h3 style={{color:'#fff',fontSize:30,margin:'0 0 12px'}}>TOWA ESTATE｜東和地産</h3><p>Real Estate with Integrity, Care, and Global Vision.</p><p>〒542-0082 大阪市中央区島之内1丁目19-21 大和長堀ビル2階中</p><p>© TOWA ESTATE. All Rights Reserved.</p></footer>
    </main>
  )
}
