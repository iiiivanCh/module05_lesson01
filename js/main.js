document.querySelector('.ads').remove();

const blockThree = document.querySelector('.item_three');
const blockFour = document.querySelector('.item_four');
blockThree.after(blockFour);

const propsListFour = document.querySelectorAll('.item_four .content .props__list .props__item_four');
const propsItemsTwoFour = document.querySelector('.item_two .content .props__list .props__item_four');
propsListFour[2].after(propsItemsTwoFour);

const title = document.querySelectorAll('h2');
const propsList = document.querySelectorAll('.props__list');
propsList[1].before(title[4]);
propsList[4].before(title[5]);
propsList[5].before(title[1]);
propsList[2].before(propsList[4]);
title[5].after(propsList[2]);

let propsItemSixTwoLast = document.querySelector('.item_six .content .props__list .props__item_two');
propsList[1].append(propsItemSixTwoLast);
propsItemSixTwoLast = document.querySelector('.item_six .content .props__list .props__item_two');
propsList[1].append(propsItemSixTwoLast);

// const propsItemSixTwoLast = document.querySelectorAll('.item_six .content .props__list .props__item_two');
// propsList[1].append(propsItemSixTwoLast);

// let a = propsList[5].children;
// array = Array.from(a);
// let b = array.slice(-2);
// propsList[1].append(b);