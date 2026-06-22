/**
 * Extra cardio — 10 exercises from ideas.md
 *
 * Two from each band: easy (sum, unique), medium (sort titles, chunk),
 * harder (running total, top N), hard (inverted index, group states).
 * Plus: partition + find by id (ideas #9 and #4) to reach 10.
 */

// ─── Testing ───
export function lowercaseHello(name: string) {
  return name ? "hello" + " " + name.toLowerCase() : "hello";
}
// ─── Easy ───

/** Sum an array of numbers. */
export function sum(numbers: number[]): number {
  const total = numbers.reduce((total, num) => {
    total += num;
    return total;
  }, 0);
  return total;
}

/** Remove duplicates, keep first occurrence order (use strict equality). */
export function unique<T>(items: T[]): T[] {
  const newItems = [...new Set(items)];
  return newItems;
}

/** Split into elements that satisfy `pred` vs those that do not (original relative order preserved in each bucket). */
export function partition<T>(arr: T[], pred: (value: T) => boolean): { pass: T[]; fail: T[] } {
  const groupedArray = arr.reduce(
    (acc, item) => {
      if (!acc["pass"]) {
        acc["pass"] = [];
      }
      if (!acc["fail"]) {
        acc["fail"] = [];
      }

      if (pred(item)) {
        acc["pass"] = [...acc["pass"], item];
      } else {
        acc["fail"] = [...acc["fail"], item];
      }
      return acc;
    },
    { pass: [], fail: [] } as { pass: T[]; fail: T[] },
  );
  return groupedArray;
}

export type User = { id: string; name: string };

/** Return the user’s `name` for `id`, or `null` if not found. */
export function findNameById(users: User[], id: string): string | null {
  const user = users.find((user) => user.id === id);
  return user?.name || null;
}

// ─── Medium ───

/**
 * Sort movie titles as if leading "The ", "A ", or "An " were not present.
 * Compare the remainder (case-sensitive OK; tests use consistent casing).
 */
export function sortTitlesIgnoringArticles(titles: string[]): string[] {
  const removeArticles = (title: string) => title.replace(/^(A |An |The )/, "");
  const sortedTitles = titles.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));
  return sortedTitles;
}

/** Split `arr` into consecutive chunks of length `size` (last chunk may be shorter). Assume `size > 0`. */
export function chunk<T>(arr: T[], size: number): T[][] {
  const chunk: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunk.push(arr.slice(i, i + size));
  }
  return chunk;
}

// ─── Harder ───

/** Cumulative sum at each step. */
export function runningTotal(values: number[]): number[] {
  const newArray: number[] = [];
  let total = 0;
  for (const num of values) {
    total += num;
    newArray.push(total);
  }
  return newArray;
}

export type ScoreRow = { studentId: string; subject: string; score: number };

/**
 * For each subject, take the top `n` scores (highest first). If fewer than `n` rows exist, return all.
 * Ties: stable by original order in the input array.
 */
export function topNPerSubject(rows: ScoreRow[], n: number): Record<string, { studentId: string; score: number }[]> {
  const results: Record<string, { studentId: string; score: number }[]> = {};
  for (const r of rows) {
    if (!results[r.subject]) {
      results[r.subject] = [];
    }
    results[r.subject].push({ score: r.score, studentId: r.studentId });
  }

  for (const r in results) {
    results[r] = results[r].sort((a, b) => b.score - a.score).slice(0, n);
  }

  return results;
}

// ─── Hard ───

export type DocWords = { id: string; words: string[] };

/**
 * Word → sorted list of document ids that contain that word (each id once per word).
 */
export function invertedIndex(docs: DocWords[]): Record<string, string[]> {
  const newData: Record<string, string[]> = {};
  for (const doc of docs) {
    for (const word of doc.words) {
      if (!newData[word]) {
        newData[word] = [];
      }
      if (doc.words.includes(word)) {
        newData[word].push(doc.id);
      }
    }
  }

  for (const i in newData) {
    newData[i] = newData[i].sort((a, b) => a.localeCompare(b));
  }
  return newData;
}

export type City = { name: string; state: string; population: number };

/**
 * States ordered by **total** population (descending). Each entry lists that state’s city **names**
 * sorted **alphabetically** (A→Z).
 */
export function groupStatesByPopulation(
  cities: City[],
): { state: string; totalPopulation: number; cities: string[] }[] {
  let newOrder: { state: string; totalPopulation: number; cities: string[] }[] = [];
  for (const city of cities) {
    const stateItem = newOrder.find((i) => i.state === city.state);
    if (!stateItem) {
      newOrder.push({ state: city.state, totalPopulation: city.population, cities: [city.name] });
    } else {
      newOrder = newOrder.map((order) => {
        if (order.state === stateItem.state) {
          return {
            ...order,
            totalPopulation: city.population + stateItem.totalPopulation,
            cities: [...order.cities, city.name],
          };
        }
        return order;
      });
    }
  }
  newOrder = newOrder
    .map((state) => {
      return { ...state, cities: state.cities.sort((a, b) => a.localeCompare(b)) };
    })
    .sort((a, b) => b.totalPopulation - a.totalPopulation);
  return newOrder;
}
