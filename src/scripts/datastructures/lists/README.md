### Lists
1. **Doubly List**
1. **Array List**
1. **Linked List**
1. **Association List**: An association list, often referred to as an alist, is a linked list in which each list element (or node) comprises a key and a value.
1. **Self-organizing list**: A self-organizing list is a list that reorders its elements based on some self-organizing heuristic to improve average access time. 
   - The aim of a self-organizing list is to improve efficiency of linear search by moving more frequently accessed items towards the head of the list.
   - A self-organizing list achieves near constant time for element access in the best case. 
   - A self-organizing list uses a reorganizing algorithm to adapt to various query distributions at runtime.
   - Example: Self-organizing lists are used as caching algorithms as in the case of LFU, LRU.
 1. **SkipList**:A skip list is a probabilistic data structure that allows O(log n) search complexity as well as O(log n) insertion complexity within an ordered sequence of n elements. Thus it can get the best features of a sorted array (for searching) while maintaining a linked list-like structure that allows insertion, which is not possible in an array. Fast search is made possible by maintaining a linked hierarchy of subsequences, with each successive subsequence skipping over fewer elements than the previous one. Searching starts in the sparsest subsequence until two consecutive elements have been found, one smaller and one larger than or equal to the element searched for. Via the linked hierarchy, these two elements link to elements of the next sparsest subsequence, where searching is continued until finally we are searching in the full sequence. The elements that are skipped over may be chosen probabilistically or deterministically, with the former being more common.
1. **An unrolled linked list**:An unrolled linked list is a variation on the linked list which stores multiple elements in each node. It can dramatically increase cache performance, while decreasing the memory overhead associated with storing list metadata such as references. It is related to the B-tree.
1. **A conc-tree**: Tree like data structure used specifically in functional and parallel programming. 
1. **XOR linked list**: takes advantage of the bitwise XOR operation to decrease storage requirements for doubly linked lists.
1. **Zipper**: A functional data structure