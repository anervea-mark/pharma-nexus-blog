import React from 'react';
const milestones=[
  {year:'2023',event:'FDA approves Elacestrant for ER+/HER2- breast cancer — first oral SERD approved',impact:'High'},
  {year:'Q1 2024',event:'DESTINY-Breast06 Phase III data: T-DXd redefines HER2-low treatment standard',impact:'Critical'},
  {year:'Q2 2024',event:'Capivasertib + fulvestrant: PI3K/AKT pathway inhibition approved by FDA',impact:'High'},
  {year:'Q3 2024',event:'AI mammography receives CE Mark in EU — clinical deployment begins across EU hospitals',impact:'Medium'},
  {year:'Q4 2024',event:'BRCA ctDNA liquid biopsy standard of care protocol published by ESMO',impact:'High'},
  {year:'Q1 2025',event:'CAR-T NK hybrid therapy achieves 94% remission in multi-center Phase III trial',impact:'Critical'},
];
const ic={Critical:'var(--accent2)',High:'var(--accent)',Medium:'var(--accent3)'};
export default function ResearchTimeline(){
  return(
    <section style={{padding:'5rem 4rem',background:'var(--bg2)'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <div style={{display:'flex',gap:'0.75rem',alignItems:'center',marginBottom:'1rem'}}>
          <div style={{width:3,height:28,background:'var(--accent3)',borderRadius:2}}/>
          <span style={{fontFamily:'var(--font-mono)',fontSize:'0.75rem',letterSpacing:'0.12em',color:'var(--text-dim)'}}>RESEARCH TIMELINE</span>
        </div>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'2.2rem',fontWeight:800,marginBottom:'3rem'}}>Key Milestones in Oncology</h2>
        <div style={{position:'relative'}}>
          <div style={{position:'absolute',left:120,top:0,bottom:0,width:1,background:'var(--border)'}}/>
          <div style={{display:'flex',flexDirection:'column',gap:'2.5rem'}}>
            {milestones.map((m,i)=>(
              <div key={i} style={{display:'flex',gap:'2rem',alignItems:'flex-start'}}>
                <div style={{width:90,textAlign:'right',fontFamily:'var(--font-mono)',fontSize:'0.72rem',color:'var(--text-dim)',paddingTop:'0.25rem',flexShrink:0}}>{m.year}</div>
                <div style={{position:'relative',width:30,flexShrink:0,display:'flex',justifyContent:'center'}}>
                  <div style={{width:14,height:14,borderRadius:'50%',background:ic[m.impact],boxShadow:`0 0 16px ${ic[m.impact]}80`,marginTop:2}}/>
                </div>
                <div style={{flex:1,paddingBottom:'0.5rem'}}>
                  <p style={{fontSize:'0.95rem',lineHeight:1.65,marginBottom:'0.5rem'}}>{m.event}</p>
                  <span style={{display:'inline-block',padding:'0.15rem 0.7rem',borderRadius:'100px',border:`1px solid ${ic[m.impact]}40`,color:ic[m.impact],fontSize:'0.6rem',fontFamily:'var(--font-mono)',letterSpacing:'0.08em'}}>{m.impact} IMPACT</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}