require('ts-node').register({
  compilerOptions: {
    module: 'CommonJS',
   
  },
});
// node --loader ts-node/esm -r ./prisma/register.ts ./prisma/updateProductTranslation.ts