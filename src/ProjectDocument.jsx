import React from 'react';
import SiteNavigation from './SiteNavigation';

export default function ProjectDocument({project,background}) {
  return <div className="project-page project-document-page">
    {background}
    <SiteNavigation showBack/>
    <main className="project-document wrap" aria-label={project.name+' 完整项目展示'}>
      <div className="document-pages">
        {project.pages.map((page,index)=><img key={page.src} src={page.src} width={page.width} height={page.height} alt={`${project.name} · 第 ${index+1} 部分（${page.source}）`} loading={index===0?'eager':'lazy'} decoding="async" fetchPriority={index===0?'high':'auto'}/>)}
      </div>
      <nav className="document-end" aria-label="项目展示导航">
        <a href="#projects">← 返回精选作品</a>
        
      </nav>
    </main>
  </div>;
}

