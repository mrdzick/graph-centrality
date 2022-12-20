class Centrality {
    constructor (graph) {
        const { adjacencyList } = graph

        this.adjacencyList = adjacencyList
    }

    calculateDegreeCentrality (node) {
        const numberOfEdge = this.adjacencyList.get(node).length
        const numberOfNode = this.adjacencyList.size

        return numberOfEdge / (numberOfNode - 1)
    }

    calculateClosenessCentrality (node) {
        // Initialize a variable to store the sum of the shortest distances to all other nodes
        let distanceSum = 0;
        
        // Use breadth-first search to find the shortest distances to all other nodes
        const queue = [node];
        const distances = new Map([[node, 0]]);
        while (queue.length > 0) {
            const currentNode = queue.shift();
            const currentDistance = distances.get(currentNode);
            for (const neighbor of this.adjacencyList.get(currentNode)) {
            if (!distances.has(neighbor)) {
                distances.set(neighbor, currentDistance + 1);
                queue.push(neighbor);
                distanceSum += currentDistance + 1;
            }
            }
        }
        
        // Calculate the closeness centrality for the node as the reciprocal of the distance sum
        const numberOfNode = this.adjacencyList.size

        return (numberOfNode - 1) / distanceSum;    
    }
}

module.exports = Centrality
