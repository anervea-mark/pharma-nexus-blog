import React from 'react';
const articles=[
  {cat:'IMMUNOTHERAPY',color:'var(--accent)',img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',title:'Bispecific Antibodies Reshape Triple-Negative Breast Cancer Treatment',summary:'Elranatamab shows 68% ORR in treatment-refractory mTNBC cohorts.',author:'Dr. Lisa Newman',journal:'Lancet Oncology',readTime:'8 min'},
  {cat:'PRECISION MEDICINE',color:'var(--accent3)',img:'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80',title:'BRCA1/2 Liquid Biopsy Detects Recurrence 14 Months Earlier',summary:'ctDNA profiling via next-gen sequencing demonstrates clinical utility in post-treatment monitoring.',author:'Dr. José Baselga',journal:'Nature Cancer',readTime:'12 min'},
  {cat:'CLINICAL TRIAL',color:'var(--gold)',img:'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=600&q=80',title:'Phase III: Olaparib Combo Cuts Metastatic Recurrence Risk by 40%',summary:'OlympiAD-2 trial in BRCA-mutated HER2-negative patients shows landmark OS data.',author:'Dr. Mark Robson',journal:'NEJM',readTime:'10 min'},
  {cat:'DRUG DEVELOPMENT',color:'var(--accent2)',img:'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80',title:'CDK4/6 Inhibitor Sacituzumab Shows Durable CR in ER+ Disease',summary:'TROPION-Breast01 trial data indicates superior tolerability versus standard chemotherapy.',author:'Dr. Aditya Bardia',journal:'JCO',readTime:'7 min'},
  {cat:'GENOMICS',color:'var(--accent)',img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',title:'Multi-Omics Atlas Identifies 23 New Breast Cancer Driver Genes',summary:'Pan-cancer TCGA analysis redraws the genomic landscape across all molecular subtypes.',author:'Dr. Christina Curtis',journal:'Cell',readTime:'15 min'},
  {cat:'AI IN ONCOLOGY',color:'var(--accent3)',img:'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80',title:'Deep Learning Mammography Outperforms Radiologists in Dense Tissue',summary:'Google Health model achieves AUC 0.94 with 37% reduction in false positives.',author:'Dr. Shravya Shetty',journal:'Nature',readTime:'9 min'},
];
export default function ArticleGrid(){
  return(
    <section style={{padding:'5rem 4rem'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'3rem'}}>
          <div>
            <div style={{display:'flex',gap:'0.75rem',alignItems:'center',marginBottom:'0.75rem'}}>
              <div style={{width:3,height:28,background:'var(--accent)',borderRadius:2}}/>
              <span style={{fontFamily:'var(--font-mono)',fontSize:'0.75rem',letterSpacing:'0.12em',color:'var(--text-dim)'}}>LATEST RESEARCH</span>
            </div>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'2.2rem',fontWeight:800}}>Recent Breakthroughs</h2>
          </div>
          <a href="#" style={{color:'var(--accent)',textDecoration:'none',fontSize:'0.85rem',fontWeight:500,borderBottom:'1px solid rgba(0,229,255,0.3)',paddingBottom:'2px'}}>View All Research →</a>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.5rem'}}>
          {articles.map((a,i)=>(
            <article key={i} style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:16,overflow:'hidden',cursor:'pointer',transition:'transform 0.3s,border-color 0.3s,box-shadow 0.3s'}}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.borderColor='rgba(0,229,255,0.35)';e.currentTarget.style.boxShadow='0 20px 40px rgba(0,0,0,0.4)';}}
              onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.boxShadow='none';}}>
              <div style={{height:180,overflow:'hidden',position:'relative'}}>
                <img src={a.img} alt={a.title} style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform 0.5s'}}
                  onMouseEnter={e=>e.target.style.transform='scale(1.05)'}
                  onMouseLeave={e=>e.target.style.transform='scale(1)'}/>
                <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(4,6,10,0.7) 0%,transparent 60%)'}}/>
              </div>
              <div style={{padding:'1.2rem'}}>
                <span style={{fontSize:'0.62rem',fontFamily:'var(--font-mono)',fontWeight:700,letterSpacing:'0.1em',color:a.color,display:'block',marginBottom:'0.6rem'}}>{a.cat}</span>
                <h3 style={{fontFamily:'var(--font-display)',fontSize:'1rem',lineHeight:1.4,marginBottom:'0.75rem',fontWeight:700}}>{a.title}</h3>
                <p style={{color:'var(--text-dim)',fontSize:'0.78rem',lineHeight:1.7,marginBottom:'1rem'}}>{a.summary}</p>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:'0.75rem',borderTop:'1px solid var(--border)'}}>
                  <div style={{fontSize:'0.7rem',color:'var(--text-dim)'}}><span style={{color:'var(--text)'}}>{a.author}</span> · {a.journal}</div>
                  <span style={{fontSize:'0.65rem',color:'var(--text-dim)',fontFamily:'var(--font-mono)'}}>{a.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}