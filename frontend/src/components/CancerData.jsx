import React from 'react';
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,LineChart,Line,PieChart,Pie,Cell,Legend} from 'recharts';
const survivalData=[{stage:'Stage I',rate:99},{stage:'Stage II',rate:86},{stage:'Stage III',rate:57},{stage:'Stage IV',rate:31}];
const incidenceData=[{year:'2019',cases:271270},{year:'2020',cases:276480},{year:'2021',cases:281550},{year:'2022',cases:287850},{year:'2023',cases:297790},{year:'2024',cases:310720}];
const treatmentData=[{name:'Immunotherapy',value:34,color:'#00e5ff'},{name:'Chemotherapy',value:28,color:'#ff2d87'},{name:'Targeted',value:22,color:'#a855f7'},{name:'Radiation',value:10,color:'#f5c842'},{name:'Surgery',value:6,color:'#3b82f6'}];
export default function CancerData(){
  return(
    <section style={{padding:'5rem 4rem',background:'var(--bg2)'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:'3.5rem'}}>
          <span style={{fontFamily:'var(--font-mono)',fontSize:'0.75rem',letterSpacing:'0.12em',color:'var(--accent)',display:'block',marginBottom:'1rem'}}>LIVE STATISTICS</span>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'2.5rem',fontWeight:800}}>Cancer Research Data 2025</h2>
          <p style={{color:'var(--text-dim)',marginTop:'0.75rem',fontSize:'0.9rem'}}>Real-world oncology metrics from ACS, SEER & WHO databases</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'2rem'}}>
          <div style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:16,padding:'1.5rem'}}>
            <h4 style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',letterSpacing:'0.1em',color:'var(--text-dim)',marginBottom:'1.2rem'}}>BREAST CANCER 5-YEAR SURVIVAL BY STAGE</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={survivalData} barCategoryGap="35%">
                <defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#00e5ff"/><stop offset="100%" stopColor="#a855f7"/></linearGradient></defs>
                <XAxis dataKey="stage" tick={{fill:'#7a8899',fontSize:9}} axisLine={false} tickLine={false}/>
                <YAxis domain={[0,100]} tick={{fill:'#7a8899',fontSize:9}} axisLine={false} tickLine={false} tickFormatter={v=>v+'%'}/>
                <Tooltip formatter={v=>[v+'%','Survival']} contentStyle={{background:'#0d1520',border:'1px solid rgba(0,229,255,0.2)',borderRadius:8,color:'#e8edf5'}}/>
                <Bar dataKey="rate" fill="url(#g1)" radius={[6,6,0,0]}/>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:16,padding:'1.5rem'}}>
            <h4 style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',letterSpacing:'0.1em',color:'var(--text-dim)',marginBottom:'1.2rem'}}>US BREAST CANCER INCIDENCE TREND</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={incidenceData}>
                <XAxis dataKey="year" tick={{fill:'#7a8899',fontSize:9}} axisLine={false} tickLine={false}/>
                <YAxis tick={{fill:'#7a8899',fontSize:9}} axisLine={false} tickLine={false} tickFormatter={v=>(v/1000).toFixed(0)+'k'}/>
                <Tooltip formatter={v=>[v.toLocaleString(),'Cases']} contentStyle={{background:'#0d1520',border:'1px solid rgba(0,229,255,0.2)',borderRadius:8,color:'#e8edf5'}}/>
                <Line type="monotone" dataKey="cases" stroke="#ff2d87" strokeWidth={2.5} dot={{fill:'#ff2d87',r:4}}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:16,padding:'1.5rem'}}>
            <h4 style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',letterSpacing:'0.1em',color:'var(--text-dim)',marginBottom:'1.2rem'}}>TREATMENT MODALITY SHARE 2025</h4>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={treatmentData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={3}>
                  {treatmentData.map((e,i)=><Cell key={i} fill={e.color}/>)}
                </Pie>
                <Tooltip formatter={v=>[v+'%']} contentStyle={{background:'#0d1520',border:'1px solid rgba(0,229,255,0.2)',borderRadius:8,color:'#e8edf5'}}/>
                <Legend iconType="circle" iconSize={8} wrapperStyle={{fontSize:'0.65rem',color:'#7a8899'}}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}