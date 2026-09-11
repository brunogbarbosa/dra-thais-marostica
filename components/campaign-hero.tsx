'use client';

import Image from 'next/image';
import { useId } from 'react';
import { ArrowRight } from 'lucide-react';
import { site, appointmentUrl } from '@/data/site';
import { useCampaignMotion } from './use-campaign-motion';

const metrics = [{ value: '+10 mil', label: 'PACIENTES ATENDIDOS' }, { value: 'CRO-SP', label: '120.169 · CIRURGIÃ-DENTISTA' }];

function SmileSeal() {
  const id = useId().replace(/:/g, '');
  return <div className="campaign-seal" role="img" aria-label="Harmonização com identidade">
    <svg viewBox="0 0 180 180" fill="none" aria-hidden="true">
      <defs>
        <path id={`${id}-top`} d="M18 90a72 72 0 0 1 144 0"/>
        <path id={`${id}-bottom`} d="M12 90a78 78 0 0 0 156 0"/>
      </defs>
      <circle pathLength="1" cx="90" cy="90" r="54" stroke="currentColor" strokeWidth=".7"/>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-top`} startOffset="50%">BELEZA COM IDENTIDADE</textPath>
      </text>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-bottom`} startOffset="50%">DRA. THAIS MARÓSTICA</textPath>
      </text>
      <text x="90" y="106" textAnchor="middle" style={{fontFamily:"var(--serif)",fontSize:49,letterSpacing:"-.09em"}}>TM</text>
    </svg>
  </div>;
}

export function CampaignHero() {
  const motionRef = useCampaignMotion();
  return <section ref={motionRef} id="inicio" className="campaign" aria-labelledby="campaign-title">
    <div className="campaign-organic campaign-organic-one" aria-hidden="true"/>
    <div className="campaign-organic campaign-organic-two" aria-hidden="true"/>
    <div className="campaign-contour" aria-hidden="true"/>
    <div className="campaign-inner">
      <div className="campaign-copy">
        <p className="campaign-kicker">HARMONIZAÇÃO COM IDENTIDADE</p>
        <h1 id="campaign-title" aria-label="Sua beleza. Sua essência.">
          <span className="campaign-title-line"><span>SUA BELEZA.</span></span>
          <span className="campaign-title-line"><span>SUA</span></span>
          <span className="campaign-title-line"><span>ESSÊNCIA.</span></span>
        </h1>
        <p className="campaign-subtitle">Naturalidade para os seus traços.<br/>Cuidado para você, por inteiro.</p>
        <div className="campaign-action"><a className="campaign-cta" href={appointmentUrl} target="_blank" rel="noreferrer"><span>AGENDAR AVALIAÇÃO</span><ArrowRight size={22} strokeWidth={1.2}/></a></div>
      </div>
      <figure className="campaign-portrait">
        <div className="campaign-silhouette"><Image className="campaign-original" src={site.images.hero} alt="Dra. Thais Maróstica" fill preload sizes="(max-width:700px) 88vw, 45vw"/></div>
      </figure>
      <SmileSeal/>
      <p className="campaign-editorial">Beleza<br/>também<br/>é saúde<span aria-hidden="true"/></p>
      <div className="campaign-metrics" aria-label="Atendimento em números">
        {metrics.map(metric=><div className="campaign-metric" key={metric.value}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
      </div>
      <div className="campaign-signature"><span aria-hidden="true"/><div><p>DRA. THAIS MARÓSTICA</p><em>Harmonização Orofacial<br className="campaign-signature-break"/> & Endodontia · Rio Preto</em></div></div>
    </div>
  </section>;
}
