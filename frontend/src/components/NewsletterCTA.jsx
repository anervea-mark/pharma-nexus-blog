import React,{useState} from 'react';
export default function NewsletterCTA(){
  const [email,setEmail]=useState('');
  const [done,setDone]=useState(false);
  return(
    <section style={{padding:'6rem 4rem',background:'var(--bg2)'}}>
      <div style={{maxWidth:700,margin:'0 auto',textAlign:'center',background:'linear-gradient(135deg,rgba(0,229,255,0.06),rgba(168,85,247,0.06))',border:'1px solid var(--border)',borderRadius:24,padding:'4rem 3rem'}}>
        <div style={{width:64,height:64,margin:'0 auto 1.5rem',borderRadius:'50%',background:'linear-gradient(135deg,var(--accent),var(--accent3))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.6rem',boxShadow:'0 0 40px rgba(0,229,255,0.2)'}}>🧬</div>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'2.2rem',fontWeight:800,marginBottom:'1rem'}}>Stay Ahead of the Cure</h2>
        <p style={{color:'var(--text-dim)',lineHeight:1.8,marginBottom:'2rem',maxWidth:480,margin:'0 auto 2rem'}}>Weekly digest of FDA approvals, Phase III results, and breakthrough papers — curated by our oncology research team.</p>
        {!done?(
          <div style={{display:'flex',gap:'0.75rem',maxWidth:440,margin:'0 auto'}}>
            <input type="email" placeholder="your@institution.edu" value={email} onChange={e=>setEmail(e.target.value)} style={{flex:1,padding:'0.85rem 1.2rem',borderRadius:'100px',background:'rgba(255,255,255,0.05)',border:'1px solid var(--border)',color:'var(--text)',fontSize:'0.85rem',outline:'none',fontFamily:'var(--font-body)'}}/>
            <button onClick={()=>email&&setDone(true)} style={{padding:'0.85rem 1.5rem',borderRadius:'100px',background:'linear-gradient(90deg,var(--accent),var(--accent3))',border:'none',cursor:'pointer',color:'#000',fontWeight:700,fontSize:'0.85rem',whiteSpace:'nowrap'}}>Subscribe</button>
          </div>
        ):(
          <div style={{color:'var(--accent)',fontFamily:'var(--font-mono)',fontSize:'0.95rem',padding:'1rem',border:'1px solid rgba(0,229,255,0.3)',borderRadius:12,display:'inline-block'}}>✓ You're on the list. Welcome to the frontier.</div>
        )}
        <p style={{fontSize:'0.7rem',color:'var(--text-dim)',marginTop:'1.5rem'}}>No spam. Unsubscribe anytime. Trusted by 12,000+ researchers.</p>
      </div>
    </section>
  );
}