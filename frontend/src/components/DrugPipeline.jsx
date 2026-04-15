import React from 'react';
const pipeline=[
  {drug:'Datopotamab Deruxtecan',target:'TROP2 ADC',phase:'FDA Review',company:'AstraZeneca/Daiichi',indication:'HR+/HER2- mBC',prob:85},
  {drug:'Inavolisib + Palbociclib',target:'PI3Kα + CDK4/6',phase:'Phase III',company:'Genentech',indication:'PIK3CA-mut ER+',prob:72},
  {drug:'BNT323/DB-1303',target:'HER2 ADC',phase:'Phase II/III',company:'BioNTech/Daiichi',indication:'HER2+ mBC',prob:68},
  {drug:'Patritumab Deruxtecan',target:'HER3 ADC',phase:'Phase II',company:'Daiichi Sankyo',indication:'mTNBC',prob:55},
  {drug:'GDC-9545 (Giredestrant)',target:'ERα Degrader',phase:'Phase II',company:'Genentech',indication:'ER+ mBC',prob:61},
];
const phaseColor={FDA Review:'var(--gold)','Phase III':'var(--accent)','Phase II/III':'var(--accent3)','Phase II':'var(--accent3)'};
const phaseBg={'FDA Review':'rgba(245,200,66,0.12)','Phase III':'rgba(0,229,255,0.1)','Phase II/III':'rgba(168,85,247,0.1)','Phase II':'rgba(168,85,247,0.1)'};
export default function DrugPipeline(){
  return(
    <section style={{padding:'5rem 4rem'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <div style={{display:'flex',gap:'0.75rem',alignItems:'center',marginBottom:'1rem'}}>
          <div style={{width:3,height:28,background:'var(--gold)',borderRadius:2}}/>
          <span style={{fontFamily:'var(--font-mono)',fontSize:'0.75rem',letterSpacing:'0.12em',color:'var(--text-dim)'}}>DRUG PIPELINE TRACKER</span>
        </div>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'2.2rem',fontWeight:800,marginBottom:'0.75rem'}}>Breast Cancer Pipeline 2025</h2>
        <p style={{color:'var(--text-dim)',fontSize:'0.85rem',marginBottom:'2.5rem'}}>Approval probability estimated from Phase data, endpoint readouts & FDA precedent</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'0.5rem',padding:'0.5rem 1.5rem',marginBottom:'0.5rem'}}>
          {['Drug / Mechanism','Company','Phase','Indication','Approval Prob.'].map(h=>(
            <div key={h} style={{fontSize:'0.65rem',fontFamily:'var(--font-mono)',color:'var(--text-dim)',letterSpacing:'0.08em'}}>{h}</div>
          ))}
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
          {pipeline.map((d,i)=>(
            <div key={i} style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:12,padding:'1.1rem 1.5rem',display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'1rem',alignItems:'center',transition:'border-color 0.2s'}}
              onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(0,229,255,0.3)'}
              onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>
              <div>
                <div style={{fontWeight:600,fontSize:'0.88rem'}}>{d.drug}</div>
                <div style={{fontSize:'0.68rem',color:'var(--text-dim)',marginTop:'0.2rem'}}>{d.target}</div>
              </div>
              <div style={{fontSize:'0.75rem',color:'var(--text-dim)'}}>{d.company}</div>
              <div style={{padding:'0.28rem 0.75rem',borderRadius:'100px',textAlign:'center',background:phaseBg[d.phase]||'rgba(168,85,247,0.1)',color:phaseColor[d.phase]||'var(--accent3)',fontSize:'0.62rem',fontFamily:'var(--font-mono)',fontWeight:700,width:'fit-content'}}>{d.phase}</div>
              <div style={{fontSize:'0.75rem',color:'var(--text-dim)'}}>{d.indication}</div>
              <div style={{display:'flex',alignItems:'center',gap:'0.75rem'}}>
                <div style={{flex:1,height:5,background:'rgba(255,255,255,0.07)',borderRadius:4,overflow:'hidden'}}>
                  <div style={{height:'100%',borderRadius:4,width:d.prob+'%',background:'linear-gradient(90deg,var(--accent),var(--accent3))',transition:'width 1s ease'}}/>
                </div>
                <span style={{fontFamily:'var(--font-mono)',fontSize:'0.7rem',color:'var(--accent)',minWidth:30,textAlign:'right'}}>{d.prob}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}