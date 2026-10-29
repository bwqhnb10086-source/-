import React from 'react';
import PillNav from './PillNav';

const items=[{href:'#about',label:'关于我'},{href:'#projects',label:'精选作品'},{href:'#life',label:'设计之外'}];

export default function SiteNavigation({showBack=false}){
  const activeHref=location.hash.startsWith('#/project/')?'#projects':location.hash;
  return <header className="site-pill-header"><PillNav items={items} activeHref={activeHref} logo={showBack?<span className="pill-return" title="返回项目卡片">←</span>:undefined} logoAlt="返回项目卡片" logoHref="#projects" layout="split" itemStyle="pill" hoverEffect="glide" indicator="pill" theme="dark" surface="glass" size="md" barColor="rgba(14, 23, 35, 0.84)" highlightColor="#e5edf5" highlightTextColor="#101923" textColor="#e1e6ed" bounce={0.3} stretch={0.5} collapse="never" intro={false} ariaLabel="主导航"/></header>;
}
