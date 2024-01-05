import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'laranja-forte': '#C9510C',
        'laranja-claro': '#EF7D00',
        'cinza-claro': '#D8D9D8',
        'verde': '#00893',
      },
    },
  },
  plugins: [],
}
export default config
