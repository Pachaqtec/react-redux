import React from 'react'
import { Layout, Menu } from 'element-react' 
import { useHistory, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const styles = { color: 'white', textDecoration: 'none' }

const Navbar = () => {
  const onOpen = () => {

  }
  
  const onClose= () => {
  
  }

  const name = useSelector((store) => store.showName)
  const showIcon = useSelector((store) => store.showIcon)  

  return (
    <Layout.Row className="tac">
      <Layout.Col span={25}>
      <Menu defaultActive="2" className="el-menu-vertical-demo" onOpen={onOpen} onClose={onClose} theme="dark">
        <Menu.SubMenu
          index="1"
          title={
            <>
              {name}{showIcon && <i className="el-icon-star-on"></i>}
            </>
          }
        >
          <Menu.ItemGroup title="Group One">
            <Menu.Item index="1-1">
              <Link to="/home" style={styles}>
                Home
              </Link>
            </Menu.Item>
            <Menu.Item index="1-2">
              <Link to="/others" style={styles}>
                Others
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Group Two">
            <Menu.Item index="1-3">Option 3</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
        <Menu.Item index="2">Navigator Two</Menu.Item>
        <Menu.Item index="3">Navigator Three</Menu.Item>
      </Menu>
      </Layout.Col>
    </Layout.Row>
  )
}

export default Navbar
