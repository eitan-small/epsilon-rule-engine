import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Dropdown, Input } from 'antd';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { useParams } from 'react-router';
import useStyles from './style.style';

const items = [
  { key: '1', label: <a href="https://www.antgroup.com">1st menu item</a> },
  { key: '2', label: <a href="https://www.aliyun.com">2nd menu item</a> },
  { key: '3', label: <a href="https://www.luohanacademy.com">3rd menu item</a> },
];

const ProjectList: React.FC = () => {
  const { styles } = useStyles();
  const params = useParams();

  return (
    <PageContainer>
      <PanelGroup direction="horizontal" style={{ height: 'calc(100vh - 200px)' }}>
        <Panel className={styles.panelLeft} collapsible defaultSize={15} minSize={10} maxSize={20}>
          {params.id}
          <div className={styles.searchInput}>
            <Input size={'middle'} prefix={<SearchOutlined />} />
            <div>
              <Dropdown menu={{ items }}>
                <Button type={'primary'} icon={<PlusOutlined />} />
              </Dropdown>
            </div>
          </div>
        </Panel>
        <PanelResizeHandle className={styles.divider} />
        <Panel style={{ background: '#fff' }}>right</Panel>
      </PanelGroup>
    </PageContainer>
  );
};

export default ProjectList;
