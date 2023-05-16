const sentence = "hello there from lighthouse labs";
for (let i = 0; i < sentence.length + 1; i++) {
  if (i === sentence.length) {
    setTimeout(() => {
      console.log('\n');
      }, i * 50);
  } else {
    setTimeout(() => {
    process.stdout.write(sentence[i]);
    }, i * 50);
  }
};

