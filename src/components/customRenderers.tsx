import React from 'react';
import style from "../styles/postHeader.module.scss";
export const customRenderers = {
    h3: ({ children }: { children: React.ReactNode }) => (
        <h3 className={style.customHeading}>{children}</h3>
    ),
    strong: ({ children }: { children: React.ReactNode }) => (
        <strong className={style.customBold}>{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
        <em className={style.customItalic}>{children}</em>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
        <blockquote className={style.customQuote}>{children}</blockquote>
    ),
    ul: ({ children }: { children: React.ReactNode }) => (
        <ul className={style.customUnorderedList}>{children}</ul>
    ),
    ol: ({ children }: { children: React.ReactNode }) => (
        <ol className={style.customOrderedList}>{children}</ol>
    ),
    li: ({ children }: { children: React.ReactNode; }) => (
        <li className={style.customLi}>
            {children}
        </li>
    ),
    code: ({children}: {children: React.ReactNode}) => (
        <code className={style.customCode}>
            {children}
        </code>
    ),
    p: ({children}: {children: React.ReactNode}) => (
        <p className={style.customLi}>
            {children}
        </p>
    ),
    a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
        href ? (
          <a href={href} className={style.customLink}>
            {children}
          </a>
        ) : (
          <a className={style.customLink} href='#'>{children}</a>
        )
      ),
    img: ({ src, alt }: { src: string; alt?: string }) => (
        <img src={src} alt={alt || ''} className={style.customImage} />
    ),
}