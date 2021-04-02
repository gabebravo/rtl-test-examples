import { rest } from 'msw';

const handlers = [
  rest.get('/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'chocolate', imagePath: '/image/chocolate.png' },
        { name: 'vanilla', imagePath: '/image/vanilla.png' },
      ])
    );
  }),
];
export { handlers };
