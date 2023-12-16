import React from 'react';
import s from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <section className={s.section}>
        <p className={s.title}>{title}</p>
        {children}
      </section>
    </>
  );
};
