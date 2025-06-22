# 0. Island Perimeter

Calculate the perimeter of a single island in a 2D grid of 0s (water) and 1s (land).

## Key Concepts

- Traverse 2D arrays with nested loops
- For each land cell, check 4 neighbors (up/down/left/right)
- Add 1 to perimeter for each adjacent water or out-of-bounds edge

## Function

```python
def island_perimeter(grid: List[List[int]]) -> int:
