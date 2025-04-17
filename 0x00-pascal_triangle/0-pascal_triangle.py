#!/usr/bin/python3
"""
pascal_triangle module

Generates Pascal's Triangle as a list
of lists for a given number of rows.
"""

def pascal_triangle(n):
    """
    The first n rows of Pascal's Triangle.

    Args:
        n (int): Number of rows (must be > 0).

    Returns:
        list: Pascal's Triangle as a list of lists.
    """
    if not isinstance(n, int) or n <= 0:
        return []

    triangle = [[1]]
    for i in range(1, n):
        row = [1]
        prev = triangle[i - 1]
        row += [prev[j - 1] + prev[j] for j in range(1, i)]
        row.append(1)
        triangle.append(row)
    return triangle
