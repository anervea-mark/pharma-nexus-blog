import React from 'react';
export default function Footer(){
  return(
    <footer style={{padding:'3rem 4rem',borderTop:'1px solid var(--border)',background:'var(--bg)'}}>
      <div style={{maxWidth:1200,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'1rem'}}>
        <div style={{display:'flex',alignItems:'center',gap:'0.75rem'}}>
          <div style={{width:32,height:32,borderRadius:'50%',background:'linear-gradient(135deg,var(--accent),var(--accent3))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.8rem',fontWeight:900,color:'#000',fontFamily:'var(--font-mono)'}}>Rx</div>
          <div>
            <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'1rem'}}>PharmaNextus</div>
            <div style={{fontSize:'0.65rem',color:'var(--text-dim)'}}>Medical Breakthroughs · Est. 2025</div>
          </div>
        </div>
        <div style={{fontSize:'0.72rem',color:'var(--text-dim)',textAlign:'center'}}>For informational purposes only. Not medical advice.<br/>© 2025 PharmaNextus · All rights reserved.</div>
        <div style={{display:'flex',gap:'1.5rem',fontSize:'0.8rem',color:'var(--text-dim)'}}>
          {['Privacy','Terms','Contact','API'].map(l=>(
            <a key={l} href="#" style={{color:'inherit',textDecoration:'none',transition:'color 0.2s'}}
              onMouseEnter={e=>e.target.style.color='var(--accent)'}
              onMouseLeave={e=>e.target.style.color='var(--text-dim)'}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}