#### Arrays data structure
1. **Array**: consisting of a collection of elements, each identified by at least one array index or key
1. **BitArray**: is an array data structure that compactly stores bits.
1. **BitField**: A bit representing some value example:<br/>
    ```c
    // defining colors
    #define BLACK   0                    /* 000 */
    #define YELLOW  (RED | GREEN)        /* 011 */
    #define MAGENTA (RED | BLUE)         /* 101 */
    #define CYAN    (GREEN | BLUE)       /* 110 */
    #define WHITE   (RED | GREEN | BLUE) /* 111 */
    ```
1. **BitBoard**: A bitboard, a specialized bit field, is a format that packs multiple related boolean variables into the same machine word, typically representing a position on a board game, or state of a game. Each bit represents a space; when the bit is positive, a property of that space is true
1. **Bitmap**: A bitmap is a mapping from some domain (for example, a range of integers, or alphabets) to bits.
1. **Circular buffer**: *A circular buffer, circular queue, cyclic buffer* or *ring buffer* is a data structure that uses a single, fixed-size buffer as if it were connected end-to-end. This structure lends itself easily to buffering data streams.<br/>
   - can be used in producer-consumer type of problems or Task Event loop et al.
1. **Control Table**: Used in automata-based programming. Example: Bytecode tables.
1. **System Image**: A system image is a serialized copy of the entire state of any system.
1. **Dope Vector**: A dope vector is a data structure used to hold information about a data object especially its memory layout.
1. **Dynamic Array**: A dynamic array, growable array, resizable array, dynamic table, mutable array, or array list is a random access, variable-size list data structure that allows elements to be added or removed dynamically.
1. **Gap Buffer**: A gap buffer in computer science is a dynamic array that allows efficient insertion and deletion operations clustered near the same location.<br/>
   - Commonly used in text editors,
1. **Hashed Array Tree**: This structure resembles a hash table with array-based collision chains, which is the basis for the name hashed array tree. A full hashed array tree can hold m^2 elements, where m is the size of the top-level directory
1. **Lookup Tables**: Used to store operations hash, and it's memoized values, to reduce re-computation.
1. **Parallel Array**: 
   ```c
   int  ages[]   = {0,          17,        2,          52,         25};
   char *names[] = {"None",     "Mike",    "Billy",    "Tom",      "Stan"};
   int  parent[] = {0 /*None*/, 3 /*Tom*/, 1 /*Mike*/, 0 /*None*/, 3 /*Tom*/};
   ```
1. **Sorted Array**: 
1. **Sparse matrix**: Can be implemented with something like Adjacency list
