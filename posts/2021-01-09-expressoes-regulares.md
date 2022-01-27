---
date: 2021-01-11 05:54:23
title: Expressões Regulares
description: Exemplos de implementação de expressões regulares
tags: [js, expressões regulares]
---

# 

```js
const createSlug = title => title.toLowerCase().replace(/ -/g, '').replace(/ /g, '-')

createSlug('Como criar um blog - Parte 1') // como-criar-um-blog-parte-1
```