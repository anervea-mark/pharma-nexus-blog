import React,{useState,useEffect} from 'react';
export default function Navbar(){
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>40);
    window.addEventListener('scroll',h);
    return ()=>window.removeEventListener('scroll',h);
  },[]);
  return(
    <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:100,padding:'1rem 3rem',background:scrolled?'rgba(4,6,10,0.95)':'transparent',backdropFilter:scrolled?'blur(20px)':'none',borderBottom:scrolled?'1px solid var(--border)':'none',transition:'all 0.4s ease',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <div style={{display:'flex',alignItems:'center',gap:'0.75rem'}}>
        <div style={{width:36,height:36,borderRadius:'50%',background:'linear-gradient(135deg,var(--accent),var(--accent3))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1rem',fontWeight:900,color:'#000',fontFamily:'var(--font-mono)'}}>Rx</div>
        <span style={{fontFamily:'var(--font-display)',fontSize:'1.3rem',fontWeight:700,letterSpacing:'-0.02em'}}>PharmaNextus</span>
      </div>
      <div style={{display:'flex',gap:'2rem',fontSize:'0.85rem',fontWeight:500,color:'var(--text-dim)'}}>
        {['Research','Cancer','Drugs','Clinical','About'].map(l=>(
          <a key={l} href="#" style={{color:'inherit',textDecoration:'none',transition:'color 0.2s'}}
            onMouseEnter={e=>e.target.style.color='var(--accent)'}
            onMouseLeave={e=>e.target.style.color='var(--text-dim)'}>{l}</a>
        ))}
      </div>
      <button style={{padding:'0.5rem 1.2rem',borderRadius:'100px',background:'linear-gradient(90deg,var(--accent),var(--accent3))',border:'none',cursor:'pointer',color:'#000',fontSize:'0.8rem',fontWeight:700,letterSpacing:'0.05em'}}>SUBSCRIBE</button>
    </nav>
  );
}