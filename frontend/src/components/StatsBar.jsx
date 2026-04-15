import React from 'react';
const stats=[
  {val:'3.8M',label:'New Cancer Cases/yr (Global)',color:'var(--accent2)'},
  {val:'685K',label:'Breast Cancer Diagnoses 2024',color:'var(--accent)'},
  {val:'$248B',label:'Oncology Market 2025',color:'var(--accent3)'},
  {val:'6,400+',label:'Active Clinical Trials',color:'var(--gold)'},
  {val:'89%',label:'Early-Stage Breast Cancer Survival',color:'var(--accent)'},
  {val:'42',label:'FDA Approvals in 2024',color:'var(--accent2)'},
];
export default function StatsBar(){
  return(
    <section style={{borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)',padding:'2.5rem 4rem',background:'var(--bg2)'}}>
      <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:'2rem'}}>
        {stats.map((s,i)=>(
          <div key={i} style={{textAlign:'center'}}>
            <div style={{fontFamily:'var(--font-mono)',fontSize:'1.7rem',fontWeight:700,color:s.color}}>{s.val}</div>
            <div style={{fontSize:'0.7rem',color:'var(--text-dim)',marginTop:'0.3rem',lineHeight:1.4}}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}