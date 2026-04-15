import React from 'react';
export default function FeaturedArticle(){
  return(
    <section style={{padding:'6rem 4rem',maxWidth:1200,margin:'0 auto'}}>
      <div style={{display:'flex',gap:'0.75rem',alignItems:'center',marginBottom:'3rem'}}>
        <div style={{width:3,height:28,background:'var(--accent2)',borderRadius:2}}/>
        <span style={{fontFamily:'var(--font-mono)',fontSize:'0.75rem',letterSpacing:'0.12em',color:'var(--text-dim)'}}>FEATURED RESEARCH</span>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr',gap:'3rem',alignItems:'center'}}>
        <div style={{position:'relative',borderRadius:'20px',overflow:'hidden',aspectRatio:'16/10'}}>
          <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&q=80" alt="Breast Cancer Research" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(4,6,10,0.85) 0%,transparent 60%)'}}/>
          <div style={{position:'absolute',bottom:'1.5rem',left:'1.5rem'}}>
            <span style={{padding:'0.25rem 0.75rem',borderRadius:'100px',background:'var(--accent2)',color:'#fff',fontSize:'0.65rem',fontWeight:700,fontFamily:'var(--font-mono)',letterSpacing:'0.08em'}}>BREAST CANCER</span>
          </div>
        </div>
        <div>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'2rem',lineHeight:1.25,fontWeight:800,marginBottom:'1.5rem'}}>HER2-Low Breast Cancer: Trastuzumab Deruxtecan Protocol Extends Median PFS by 18 Months</h2>
          <p style={{color:'var(--text-dim)',lineHeight:1.9,marginBottom:'1.5rem'}}>In the landmark DESTINY-Breast06 trial, ADC therapy demonstrated unprecedented efficacy in HER2-low metastatic breast cancer, redefining the treatment landscape for 55% of patients previously excluded from targeted therapy.</p>
          <div style={{display:'flex',gap:'2rem',marginBottom:'2rem'}}>
            {[['18mo','PFS Extension'],['57%','Response Rate'],['N=713','Cohort Size']].map(([v,l])=>(
              <div key={l}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'1.4rem',color:'var(--accent)',fontWeight:700}}>{v}</div>
                <div style={{fontSize:'0.7rem',color:'var(--text-dim)'}}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
            <div style={{width:36,height:36,borderRadius:'50%',background:'linear-gradient(135deg,var(--accent3),var(--accent2))',flexShrink:0}}/>
            <div>
              <div style={{fontSize:'0.85rem',fontWeight:600}}>Dr. Shanu Modi, MD</div>
              <div style={{fontSize:'0.72rem',color:'var(--text-dim)'}}>Memorial Sloan Kettering · NEJM</div>
            </div>
            <span style={{marginLeft:'auto',fontSize:'0.72rem',color:'var(--text-dim)'}}>Mar 12, 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}