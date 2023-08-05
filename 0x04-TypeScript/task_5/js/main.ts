// task_5/js/main.ts

export interface MajorCredits {
  credits: number;
  _brand: 'MajorCredits';
}

export interface MinorCredits {
  credits: number;
  _brand: 'MinorCredits';
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, _brand: 'MajorCredits' };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, _brand: 'MinorCredits' };
}
