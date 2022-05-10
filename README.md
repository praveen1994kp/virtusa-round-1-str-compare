## Original Question:

~~~
Write a program which takes two strings as input from the user (str1 and str2). This program should print two strings as output (op1 and op2).

op1 should contain all the characters which are present in str1 but NOT present in str2.

op2 should contain all the characters which are present in str2 but NOT present in str1.
~~~

| field     | str1 | str2      | op1 | op2     |
|-----------|------|-----------|-----|---------|
| Example 1 | ABC  | BC        | A   | <null>  |
| Example 2 | BC   | BANGALORE | C   | ANGLORE |

## Assumptions

- Comparison should be case sensitive
- Outputs should not include duplicate characters


### Output from sample TCs:

~~~
PS C:\Workspace\Interview\virtusa-round-1-str-compare> node .\main.js
str1: ABC
str2: BC
op1: A
op2: null
str1: BC
str2: BANGALORE
op1: C
op2: ANGLORE
str1: BC
str2: BANGALORELORE
op1: C
op2: ANGLORE
~~~