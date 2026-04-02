# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - navigation [ref=e10]:
      - button [ref=e11] [cursor=pointer]
    - generic [ref=e14]:
      - heading "Tool Tips" [level=1] [ref=e15]
      - generic [ref=e16]:
        - paragraph [ref=e17]: Practice Tool Tips
        - button "Hover me to see" [ref=e18] [cursor=pointer]
      - textbox "Hover me to see" [ref=e20]
      - generic [ref=e21]:
        - link "Contrary" [ref=e22] [cursor=pointer]:
          - /url: "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        - text: to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
        - link "1.10.32" [ref=e23] [cursor=pointer]:
          - /url: "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        - text: and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
  - contentinfo [ref=e30]:
    - generic [ref=e31]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```