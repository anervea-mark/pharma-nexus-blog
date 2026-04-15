import React from 'react';
export default function Hero(){
  return(
    <section style={{minHeight:'100vh',display:'flex',alignItems:'center',position:'relative',overflow:'hidden',padding:'0 4rem'}}>
      <div style={{position:'absolute',width:800,height:800,borderRadius:'50%',background:'radial-gradient(circle,rgba(0,229,255,0.07) 0%,transparent 70%)',top:'-200px',right:'-200px',pointerEvents:'none'}}/>
      <div style={{position:'absolute',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(168,85,247,0.08) 0%,transparent 70%)',bottom:'-100px',left:'-100px',pointerEvents:'none'}}/>
      <div style={{position:'absolute',inset:0,opacity:0.03,backgroundImage:'linear-gradient(var(--accent) 1px,transparent 1px),linear-gradient(90deg,var(--accent) 1px,transparent 1px)',backgroundSize:'80px 80px'}}/>
      <div style={{maxWidth:1200,margin:'0 auto',width:'100%',paddingTop:'8rem',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
        <div className="fadeUp">
          <div style={{display:'inline-flex',alignItems:'center',gap:'0.5rem',padding:'0.3rem 1rem',borderRadius:'100px',border:'1px solid rgba(0,229,255,0.3)',background:'rgba(0,229,255,0.05)',fontSize:'0.72rem',fontFamily:'var(--font-mono)',color:'var(--accent)',letterSpacing:'0.1em',marginBottom:'2rem'}}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'var(--accent)',display:'inline-block',animation:'pulse 2s infinite'}}/>
            BREAKING RESEARCH · 2025
          </div>
          <h1 style={{fontFamily:'var(--font-display)',fontSize:'clamp(2.5rem,5vw,4.5rem)',lineHeight:1.1,fontWeight:900,marginBottom:'1.5rem',letterSpacing:'-0.03em'}}>
            Where Medicine<br/>
            <em style={{fontStyle:'italic',color:'transparent',backgroundClip:'text',WebkitBackgroundClip:'text',backgroundImage:'linear-gradient(90deg,var(--accent),var(--accent3))'}}>Meets Tomorrow</em>
          </h1>
          <p style={{color:'var(--text-dim)',fontSize:'1.05rem',lineHeight:1.8,maxWidth:480,marginBottom:'2.5rem'}}>Curated breakthroughs in oncology, immunotherapy, and precision medicine — decoded for researchers, clinicians, and curious minds.</p>
          <div style={{display:'flex',gap:'1rem'}}>
            <button style={{padding:'0.85rem 2rem',borderRadius:'100px',background:'linear-gradient(90deg,var(--accent),var(--accent3))',border:'none',cursor:'pointer',color:'#000',fontSize:'0.9rem',fontWeight:700}}>Explore Research →</button>
            <button style={{padding:'0.85rem 2rem',borderRadius:'100px',background:'transparent',border:'1px solid var(--border)',cursor:'pointer',color:'var(--text)',fontSize:'0.9rem',fontWeight:500}}>View Pipeline</button>
          </div>
        </div>
        <div style={{position:'relative',height:520}}>
          <div style={{position:'absolute',inset:0,borderRadius:'24px',overflow:'hidden',border:'1px solid var(--border)',background:'var(--card)',backdropFilter:'blur(20px)'}}>
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" alt="Lab" style={{width:'100%',height:'65%',objectFit:'cover',opacity:0.75}}/>
            <div style={{padding:'1.5rem'}}>
              <span style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--accent2)',letterSpacing:'0.1em'}}>ONCOLOGY · FEATURED</span>
              <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.2rem',marginTop:'0.5rem',lineHeight:1.4}}>CAR-T Cell Therapy Shows 94% Remission Rate in Phase III Trial</h3>
              <p style={{color:'var(--text-dim)',fontSize:'0.82rem',marginTop:'0.5rem'}}>Nature Medicine · March 2025</p>
            </div>
          </div>
          <div style={{position:'absolute',bottom:-20,left:-20,background:'linear-gradient(135deg,var(--accent2),var(--accent3))',borderRadius:'16px',padding:'1rem 1.4rem',color:'#fff',boxShadow:'0 20px 40px rgba(255,45,135,0.3)'}}>
            <div style={{fontFamily:'var(--font-mono)',fontSize:'1.8rem',fontWeight:700}}>94%</div>
            <div style={{fontSize:'0.7rem',opacity:0.9}}>Remission Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}