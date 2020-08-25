<template>
  <header>
    <div class="container">
      <nav>
        <template v-for="(item,i) in navLinks">
          <!--          没有子菜单-->
          <template v-if="!item.children || item.children.length<=0">
            <router-link class="nav-link" :to="item.link" :key="i" v-if="item.type===0">
              <font-awesome-icon :icon="item.icon" v-if="item.icon.length>0"/>
              <span v-text="item.text"></span>
            </router-link>
            <a class="nav-link" :href="item.link" :target="item.target===0?'_self':'_blank'" v-else>
              <font-awesome-icon :icon="item.icon" v-if="item.icon.length>0"/>
              <span v-text="item.text"></span>
            </a>
          </template>
          <!--          有子菜单-->
          <div class="dropdown" v-else :key="i">
            <font-awesome-icon :icon="item.icon" v-if="item.icon.length>0"/>
            <span v-text="item.text"></span>
            <div class="dropdown-content" ref="dropdownContent">
              <template  v-for="(subItem, subI) in item.children" >
                <router-link class="nav-link" :to="subItem.link" :key="subI" v-if="subItem.type===0">
                  <font-awesome-icon :icon="subItem.icon" v-if="subItem.icon.length>0"/>
                  <span v-text="subItem.text"></span>
                </router-link>
                <a class="nav-link" :href="subItem.link" :target="subItem.target===0?'_self':'_blank'" v-else>
                  <font-awesome-icon :icon="subItem.icon" v-if="subItem.icon.length>0"/>
                  <span v-text="subItem.text"></span>
                </a>
              </template>
            </div>
          </div>
        </template>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        navLinks: []
      }
    },
    methods: {
      getNavLinks() {
        let tempdata = [
          {
            id: 4,
            parentId: 3,
            type: 1,
            target: 1,
            link: "https://www.baidu.com",
            text: "百度",
            icon: "home",
            children: []
          },
          {
            id: 5,
            parentId: 3,
            type: 0,
            target: 0,
            link: "/article/1",
            text: "我的文章",
            icon: "",
            children: []
          },
          {
            id: 2,
            parentId: 0,
            type: 0,
            target: 0,
            link: "/",
            text: "首页2",
            icon: "home",
            children: []
          },
          {
            id: 1,
            parentId: 0,
            type: 0,
            target: 0,
            link: "/",
            text: "首页1",
            icon: "home",
            children: []
          },
          {
            id: 3,
            parentId: 0,
            type: 0,
            target: 0,
            link: "/",
            text: "工具",
            icon: "tools",
            children: []
          },

        ]

        // 取出所有父级节点 并排序
        let topMenu = tempdata.filter(item => {
          return item.parentId === 0
        }).sort((a, b) => {
          return a.id - b.id
        });

        // 取出所有子节点，插入到父节点的 children 属性里面
        tempdata.filter(item => {
          return item.parentId !== 0
        }).sort((a, b) => {
          return a.id - b.id
        }).forEach(item => {
          topMenu.forEach(topItem=>{
            if(item.parentId === topItem.id){
              topItem.children.push(item);
            }
          });
        });

        this.navLinks = topMenu;
      },
    },
    mounted() {
      this.getNavLinks();
    }
  }
</script>

<style scoped>
  header {
    width: 100%;
    height: 500px;
    background: url("https://cdn.jsdelivr.net/gh/shironekoa3/cdn@master/images/background.jpg");
    /*filter: brightness(90%);*/
  }

  .container {
    width: 100%;
    height: 60px;
    background-image: linear-gradient(rgba(0, 0, 0, .3), transparent);
  }

  nav {
    height: 60px;
    line-height: 60px;
  }

  .nav-link, .dropdown {
    color: #ffffff;
    display: inline-block;
    height: 100%;
    width: 100px;
    font-size: 16px;
    transition: all .3s;
  }

  .dropdown {
    position: relative;
    cursor: pointer;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    width: 120px;
    left: -30px;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    transition: all .5s;
  }

  .dropdown-content > .nav-link {
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #444;
    font-size: 14px;
    transition: all .2s;
  }

  .dropdown-content > a:hover {
    background-color: #eee;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

</style>
