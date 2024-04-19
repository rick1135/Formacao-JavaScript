const precoProduto = 100;
const formaPagamento = 'débito';

if(formaPagamento=='débito') console.log('O valor a ser pago é R$' + (precoProduto*0.9).toFixed(2));
else if(formaPagamento=='dinheiro' || formaPagamento=='pix') console.log('O valor a ser pago é R$' + (precoProduto*0.85).toFixed(2));
else if(formaPagamento=='crédito2x') console.log('O valor a ser pago é R$' + precoProduto.toFixed(2));
else if(formaPagamento=='crédito2x+') console.log('O valor a ser pago é R$' + (precoProduto+(precoProduto*0.1)).toFixed(2));