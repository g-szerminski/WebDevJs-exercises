// ---- 1 ----
// const szarik1 = {
//     children: ['fafik', 'żaba'],
//     showChildren: function() {
//         const that = this;
//         this.children.forEach(function(child, index) {
//             console.log(that.children[index]);
//      })
//     },
//    }
//    szarik1.showChildren()

// ----2 ----
// const szarik1 = {
//     children: ['fafik', 'żaba'],
//     showChildren: function() {
//         for (const item of this.children) {
//             console.log(item);
//         }
//     },
//    }
//    szarik1.showChildren()

// ---- 3 ----
// const szarik1 = {
//     children: ['fafik', 'żaba'],
//     showChildren: function() {
//         this.children.forEach((child, index) => {
//             console.log(this.children[index]);
//      })
//     },
//    }
//    szarik1.showChildren()

// ---- 4 ----
const szarik1 = {
    children: ['fafik', 'żaba'],
    showChildren: function() {
        this.children.forEach(function(child, index) {
            console.log(this.children[index]);
     }.bind(this))
    },
   }
   szarik1.showChildren()